import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type ?? "text",
    };
  }
  render() {
    return (
      <div className="tw-input">
        <input type={this.state.type} />
      </div>
    );
  }
}

export default Input;
