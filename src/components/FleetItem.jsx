import React from "react";
class FleetItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: props.isUser ?? false,
      isSeen: props.isSeen ?? false,
    };
  }
  opened() {}
  render() {
    if (this.state.isUser) {
      return (
        <div className="tw-avatar tw-fleet-self" onClick={this.opened}>
          <span className="tw-icon tw-plus-icon">+</span>
        </div>
      );
    } else {
      if (this.state.isSeen) {
        return (
          <div
            className="tw-avatar tw-fleet tw-fleet-seen"
            onClick={this.opened}
          ></div>
        );
      } else {
        return <div className="tw-avatar tw-fleet" onClick={this.opened}></div>;
      }
    }
  }
}

FleetItem.defaultProps = {
  isUser: false,
  isSeen: false,
};

export default FleetItem;
