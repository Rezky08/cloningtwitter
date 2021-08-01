import React from "react";
class FleetItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: props.isUser ?? false,
      isSeen: props.isSeen ?? false,
    };
  }
  render() {
    if (this.state.isUser) {
      return (
        <div className="tw-avatar tw-fleet-self">
          <span className="tw-icon tw-plus-icon">+</span>
        </div>
      );
    } else {
      if (this.state.isSeen) {
        return <div className="tw-avatar tw-fleet tw-fleet-seen"></div>;
      } else {
        return <div className="tw-avatar tw-fleet"></div>;
      }
    }
  }
}

FleetItem.defaultProps = {
  isUser: false,
  isSeen: false,
};

export default FleetItem;
