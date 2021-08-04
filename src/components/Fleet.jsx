import React from "react";
import DragToScroll from "./DragToScroll";

class Fleet extends React.Component {
  render() {
    return (
      <DragToScroll direction="x">
        <div className="tw-fleet-container">
          <div className="tw-fleet-items">{this.props.children}</div>
        </div>
      </DragToScroll>
    );
  }
}

export default Fleet;
