import React from "react";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "Rezky Setiawan",
      userName: "rezky.setiawn85",
    };
  }
  render() {
    return (
      <div className="tw-profile-header">
        <div className="tw-profile-header--image"></div>
        <div className="tw-profile-header-container">
          <div className="tw-profile-header--avatar-container">
            <div className="tw-profile-header--avatar">
              <Avatar xxl />
            </div>
            <div className="">
              <Button pill className="tw-profile--button-edit">
                Edit profile
              </Button>
            </div>
          </div>
          <div className="tw-profile-header--name-container">
            <span className="tw-profile-header--name-display">
              {this.state.displayName}
            </span>
            <span className="tw-profile-header--name-user">
              @{this.state.userName}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
