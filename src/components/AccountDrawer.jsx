import React from "react";
import Drawer from "@/components/Drawer";
import Avatar from "@/components/Avatar";

class AccountDrawer extends React.Component {
  render() {
    return (
      <Drawer
        className="tw-account-drawer"
        header={<span className="tw-collapse-title">Account info</span>}
        trigger={
          <span className="tw-collapse-icon">
            <Avatar sm />
          </span>
        }
      >
        {[...Array(10)].map((value) => {
          return (
            <span className="tw-account-drawer-item" key={value}>
              value
            </span>
          );
        })}
      </Drawer>
    );
  }
}

export default AccountDrawer;
