import React from "react";
import DragToScroll from "./DragToScroll";

class Fleet extends React.Component {
  render() {
    return (
      <div className="tw-fleet-container">
        <DragToScroll direction="x">
          <div className="tw-fleet-items">{this.props.children}</div>
        </DragToScroll>
      </div>
    );
  }
}

export default Fleet;
