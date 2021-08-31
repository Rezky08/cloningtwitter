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
        {[...Array(10)].map((value, index) => {
          return (
            <span className="tw-account-drawer-item" key={index}>
              {index}
            </span>
          );
        })}
      </Drawer>
    );
  }
}

export default AccountDrawer;
