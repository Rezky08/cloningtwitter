import React from "react";

import Icon from "@/components/Icon";
import { ReactComponent as HomeIcon } from "@/assets/icons/Home.svg";
import { ReactComponent as SearchIcon } from "@/assets/icons/Search.svg";
import { ReactComponent as NotificationIcon } from "@/assets/icons/Notification.svg";
import { ReactComponent as DirectMessageIcon } from "@/assets/icons/DirectMessage.svg";
class Navigation extends React.Component {
  render() {
    return (
      <div className="tw-navigation-container">
        <div className="tw-navigation-items">
          <span className="tw-navigation-item-active">
            <Icon icon={<HomeIcon />} />
          </span>
          <span className="tw-navigation-item">
            <Icon icon={<SearchIcon />} />
          </span>
          <span className="tw-navigation-item">
            <Icon icon={<NotificationIcon />} />
          </span>
          <span className="tw-navigation-item">
            <Icon icon={<DirectMessageIcon />} />
          </span>
        </div>
      </div>
    );
  }
}

export default Navigation;
