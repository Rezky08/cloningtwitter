import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as TwitterIcon } from "@/assets/icons/Twitter.svg";
import { ReactComponent as SparkIcon } from "@/assets/icons/Spark.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="tw-header">
        <span className="tw-collapse-icon">
          <div className="tw-avatar sm"></div>
        </span>
        <div className="tw-brand">
          <Icon icon={<TwitterIcon />} />
        </div>
        <span className="tw-toggle">
          <Icon icon={<SparkIcon />} />
        </span>
      </div>
    );
  }
}

export default Header;
