import React from "react";

class Fleet extends React.Component {
  render() {
    return (
      <div className="tw-fleet-container">
        <div className="tw-fleet-items">{this.props.children}</div>
      </div>
    );
  }
}

export default Fleet;
