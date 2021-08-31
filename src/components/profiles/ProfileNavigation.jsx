import React from "react";
import DragToScroll from "../DragToScroll";

class ProfileNavigationItem extends React.Component {
  constructor(props) {
    super(props);
    this.navigationItemRef = React.createRef();
  }
  render() {
    return (
      <div className="tw-profile-navigation--item" ref={this.navigationItemRef}>
        <div>
          <span>{this.props.children}</span>
        </div>
      </div>
    );
  }
}

class ProfileNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.profileNavigationRef = React.createRef();
    this.setActiveSelectedItem = this.setActiveSelectedItem.bind(this);
  }
  componentDidMount() {
    this.setActiveSelectedItem();
  }
  setActiveSelectedItem() {
    let items = this.profileNavigationRef.current.querySelectorAll(
      ".tw-profile-navigation--item"
    );
    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  }
  render() {
    return (
      <DragToScroll>
        <div className="tw-profile-navigation" ref={this.profileNavigationRef}>
          <div className="tw-profile-navigation--container">
            <ProfileNavigationItem>Test</ProfileNavigationItem>
            <ProfileNavigationItem>Lorem, ipsum</ProfileNavigationItem>
            <ProfileNavigationItem>Test</ProfileNavigationItem>
            <ProfileNavigationItem>Test</ProfileNavigationItem>
            <ProfileNavigationItem>Test</ProfileNavigationItem>
            <ProfileNavigationItem>Test</ProfileNavigationItem>
            <ProfileNavigationItem>Test</ProfileNavigationItem>
            <ProfileNavigationItem>Test</ProfileNavigationItem>
            <ProfileNavigationItem>Test</ProfileNavigationItem>
            <ProfileNavigationItem>Test</ProfileNavigationItem>
          </div>
        </div>
      </DragToScroll>
    );
  }
}

export default ProfileNavigation;
