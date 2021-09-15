import React from "react";

import Icon from "@/components/Icon";
import { ReactComponent as HomeIcon } from "@/assets/icons/Home.svg";
import { ReactComponent as SearchIcon } from "@/assets/icons/Search.svg";
import { ReactComponent as NotificationIcon } from "@/assets/icons/Notification.svg";
import { ReactComponent as DirectMessageIcon } from "@/assets/icons/DirectMessage.svg";
import { Link, matchPath, useLocation } from "react-router-dom";

function NavigationItem(props) {
  const location = useLocation();
  const match = matchPath(location.pathname, {
    path: props.link,
    exact: true,
    strict: false,
  });

  return (
    <Link to={props.link}>
      <span
        className={
          props.active ?? match
            ? "tw-navigation-item-active"
            : "tw-navigation-item"
        }
      >
        <Icon icon={props.icon} />
      </span>
    </Link>
  );
}
class Navigation extends React.Component {
  render() {
    return (
      <div className="tw-navigation-container">
        <div className="tw-navigation-items">
          <NavigationItem icon={<HomeIcon />} link="/" />
          <NavigationItem icon={<SearchIcon />} link="/search" />
          <NavigationItem icon={<NotificationIcon />} link="/notification" />
          <NavigationItem icon={<DirectMessageIcon />} link="/message" />
        </div>
      </div>
    );
  }
}

export default Navigation;
