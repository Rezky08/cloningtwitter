import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type ?? "text",
      value: props.value ?? "",
    };
    this.inputRef = React.createRef();
    this.containerRef = props.ref ?? React.createRef();
    this.onInputClicked = this.onInputClicked.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputFocused = this.onInputFocused.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentDidUpdate(props) {
    if (this.props.value !== props.value) {
      this.setState({ value: this.props.value });
    }
    if (this.state.value !== "") {
      this.onInputFocused();
    }
  }
  onInputFocused() {
    this.containerRef.current.classList.add("focus");
  }
  onInputClicked() {
    this.containerRef.current?.classList.add("focus");
    this.inputRef.current?.focus();
  }
  onInputBlur() {
    if (!this.state.value) {
      this.containerRef.current?.classList.remove("focus");
    }
  }
  onValueChange(value) {
    this.setState(
      {
        value: value ?? this.state.value,
      },
      () => this.props.onChange(value)
    );
  }
  render() {
    return (
      <div
        className="tw-input"
        onClick={this.onInputClicked}
        ref={this.containerRef}
      >
        <div className="tw-input-placeholder--container">
          <span className="tw-input-placeholder--text">
            {this.props.placeholder}
          </span>
        </div>
        <input
          type={this.state.type}
          ref={this.inputRef}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocused}
          onChange={(e) => {
            this.onValueChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === this.props.keyDown?.key) {
              this.props.keyDown?.action(e);
            }
          }}
          value={this.state.value}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
