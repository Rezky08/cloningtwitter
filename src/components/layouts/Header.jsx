import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as TwitterIcon } from "@/assets/icons/Twitter.svg";
import { ReactComponent as SparkIcon } from "@/assets/icons/Spark.svg";
import { ReactComponent as ArrowLeftIcon } from "@/assets/icons/ArrowLeft.svg";
import AccountDrawer from "@/components/AccountDrawer";
import GoBack from "@/components/GoBack";

// import Fleet from "@/components/Fleet";
// import FleetItem from "@/components/FleetItem";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.setStickyWhenScrolledDown = this.setStickyWhenScrolledDown.bind(this);
    this.addClassName = this.addClassName.bind(this);
    this.state = {
      isHome: props.isHome ?? false,
    };
  }
  componentDidMount() {
    this.addClassName();
    this.setStickyWhenScrolledDown();
  }
  addClassName() {
    if (this.props.className) {
      this.headerRef.current.classList.add(this.props.className);
    }
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
    let header;
    if (this.state.isHome) {
      header = (
        <div className="tw-header home">
          <AccountDrawer />
          <div className="tw-brand">
            <Icon icon={<TwitterIcon />} />
          </div>
          <span className="tw-toggle">
            <Icon icon={<SparkIcon />} />
          </span>
        </div>
      );
    } else {
      header = (
        <div
          className={[
            "tw-header",
            this.props.borderless ? "borderless" : "",
          ].join(" ")}
        >
          {this.props.left || this.props.title ? (
            <div className="tw-header--left">
              <div className="tw-header--left-action">
                {this.props.left ?? (
                  <GoBack>
                    <Icon icon={<ArrowLeftIcon />} size="1.4rem" />
                  </GoBack>
                )}
              </div>
              <div className="tw-header--left-title">{this.props.title}</div>
            </div>
          ) : null}
          {this.props.children}
          {this.props.right ? (
            <div className="tw-header--right">{this.props.right}</div>
          ) : null}
        </div>
      );
    }

    return (
      <div className="tw-header-container" ref={this.headerRef}>
        {header}
      </div>
    );
  }
}

export default Header;
