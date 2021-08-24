import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as CrossIcon } from "@/assets/icons/Cross.svg";

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.drawerRef = React.createRef();
  }
  show() {
    this.drawerRef.current.classList.add("active");
  }
  hide() {
    this.drawerRef.current.classList.remove("active");
  }

  render() {
    return (
      <div className="tw-drawer" ref={this.drawerRef}>
        <span className="tw-drawer-trigger" onClick={this.show}>
          {this.props.trigger}
        </span>
        <div className="tw-drawer-container">
          <div className="tw-drawer-cover"></div>
          <div className="tw-drawer-content">
            <div className="tw-drawer-content-header">
              <div className="tw-drawer-content-header-left">
                {this.props.header}
              </div>
              <span onClick={this.hide}>
                <Icon icon={<CrossIcon />} size="1.2rem" />
              </span>
            </div>
            <div className="tw-drawer-content-body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drawer;
