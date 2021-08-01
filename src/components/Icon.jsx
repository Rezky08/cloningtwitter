import React from "react";

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size ?? "1.5rem",
    };
  }
  render() {
    return (
      <span className="tw-icon">
        {React.cloneElement(this.props.icon, {
          height: this.state.size,
          width: this.state.size,
        })}
      </span>
    );
  }
}

export default Icon;
