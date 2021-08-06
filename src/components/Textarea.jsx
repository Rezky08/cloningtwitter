import React from "react";

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
    this.addClassName = this.addClassName.bind(this);
    this.emitInput = this.emitInput.bind(this);

    this.state = {
      textarea: "",
      maxLength: props.maxLength ?? 200,
    };
  }

  componentDidMount() {
    this.addClassName();
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
      },
      () => this.props.onChange(this.state.textarea)
    );
  }

  render() {
    return (
      <div
        className="tw-textarea"
        ref={this.textareaRef}
        placeholder={this.props.placeholder}
        contentEditable="true"
        onInput={this.emitInput}
      ></div>
    );
  }
}

export default Textarea;
