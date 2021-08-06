import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as TwitterIcon } from "@/assets/icons/Twitter.svg";
import { ReactComponent as SparkIcon } from "@/assets/icons/Spark.svg";
import Avatar from "@/components/Avatar";

import Fleet from "@/components/Fleet";
import FleetItem from "@/components/FleetItem";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.setStickyWhenScrolledDown = this.setStickyWhenScrolledDown.bind(this);
  }
  componentDidMount() {
    this.setStickyWhenScrolledDown();
  }

  setStickyWhenScrolledDown() {
    let lastPosition = document.documentElement.scrollTop;
    document.addEventListener("scroll", (e) => {
      if (lastPosition > document.documentElement.scrollTop) {
        this.headerRef.current?.classList.remove("sticky-up");
        this.headerRef.current?.classList.add("sticky");
      } else {
        this.headerRef.current?.classList.remove("sticky");
        this.headerRef.current?.classList.add("sticky-up");
      }
      lastPosition = document.documentElement.scrollTop;
    });
  }

  render() {
    return (
      <div className="tw-header-container" ref={this.headerRef}>
        <div className="tw-header">
          <span className="tw-collapse-icon">
            <Avatar sm />
          </span>
          <div className="tw-brand">
            <Icon icon={<TwitterIcon />} />
          </div>
          <span className="tw-toggle">
            <Icon icon={<SparkIcon />} />
          </span>
        </div>
        {/* <Fleet>
          <FleetItem isUser={true} />
          <FleetItem isSeen={true} />
          <FleetItem />
          <FleetItem />
          <FleetItem />
          <FleetItem />
          <FleetItem />
          <FleetItem />
          <FleetItem />
          <FleetItem />
          <FleetItem />
        </Fleet> */}
      </div>
    );
  }
}

export default Header;
