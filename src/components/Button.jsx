import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.ButtonRef = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <button
        ref={this.ButtonRef}
        className={[
          "tw-button",
          this.props.circle ?? "tw-button-circle",
          this.props.className,
        ].join(" ")}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;
