import React from "react";

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
    this.addClassName = this.addClassName.bind(this);
    this.emitInput = this.emitInput.bind(this);
    this.setDefaultValue = this.setDefaultValue.bind(this);

    this.state = {
      hasInitiated: false,
      textarea: "",
      textareaHTML: "",
      maxLength: props.maxLength ?? 200,
    };
  }

  componentDidMount() {
    this.addClassName();
    this.setDefaultValue();
  }

  componentDidUpdate(props) {
    if (this.props.value !== props.value && !this.state.hasInitiated) {
      this.setDefaultValue();
    }
  }

  setDefaultValue() {
    if (
      this.props.value !== "" &&
      this.props.value !== undefined &&
      this.props.value !== null
    ) {
      this.textareaRef.current.innerHTML = this.props.value ?? "";
      this.setState({ hasInitiated: true });
    }
  }

  addClassName() {
    if (this.props.className) {
      this.textareaRef.current.classList.add(this.props.className);
    }
  }

  emitInput(e) {
    this.setState(
      {
        textarea: e.currentTarget.textContent ?? this.state.textarea,
        textareaHTML: e?.currentTarget?.innerHTML ?? this.state.textareaHTML,
      },
      () => this.props.onChange(this.state.textarea, this.state.textareaHTML)
    );
  }

  render() {
    return (
      <div
        className={[
          "tw-textarea",
          this.props.bordered ? "bordered" : null,
        ].join(" ")}
        ref={this.textareaRef}
        placeholder={this.props.placeholder}
        contentEditable="true"
        onInput={this.emitInput}
      ></div>
    );
  }
}

Textarea.defaultProps = {
  onChange: () => {},
};

export default Textarea;
