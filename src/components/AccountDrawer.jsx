import React from "react";
import Drawer from "@/components/Drawer";
import Avatar from "@/components/Avatar";

class AccountDrawer extends React.Component {
  render() {
    return (
      <Drawer
        header={<span className="tw-collapse-title">Account info</span>}
        trigger={
          <span className="tw-collapse-icon">
            <Avatar sm />
          </span>
        }
      ></Drawer>
    );
  }
}

export default AccountDrawer;
