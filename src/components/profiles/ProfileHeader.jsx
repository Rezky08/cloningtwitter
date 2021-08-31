import React from "react";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import AuthContext from "../AuthContext";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "Rezky Setiawan",
      userName: "rezky.setiawn85",
      following: true,
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
              <AuthContext.Consumer>
                {({ user }) => {
                  if (user?.name === this.state.userName) {
                    return (
                      <Button pill className="tw-profile--button edit">
                        Edit profile
                      </Button>
                    );
                  } else {
                    if (this.state.following) {
                      return (
                        <Button
                          pill
                          className="tw-profile--button follow following"
                        >
                          Following
                        </Button>
                      );
                    } else {
                      return (
                        <Button pill className="tw-profile--button follow">
                          Follow
                        </Button>
                      );
                    }
                  }
                }}
              </AuthContext.Consumer>
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
