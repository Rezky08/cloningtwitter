import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type ?? "text",
      value: props.value ?? null,
    };
    this.inputRef = React.createRef();
    this.containerRef = React.createRef();
    this.onInputClicked = this.onInputClicked.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputFocused = this.onInputFocused.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
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
        />
      </div>
    );
  }
}

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
