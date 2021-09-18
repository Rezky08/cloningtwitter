import React from "react";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import AuthContext from "../AuthContext";
import UserContext from "../UserContext";
import API from "@/functions/apis";
import { withRouter } from "react-router";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayname: "Rezky Setiawan",
      username: "rezky.setiawn85",
      following: true,
    };
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  followUser(username) {
    API.post(`/follow/${username}`).then(() => {
      this.setState({ following: true });
    });
  }
  unfollowUser(username) {
    API.post(`/unfollow/${username}`).then(() => {
      this.setState({ following: true });
    });
  }
  editProfile() {
    this.props.history.push("/profile/edit");
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userProfile) => {
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
                        if (user?.username === userProfile.username) {
                          return (
                            <Button
                              pill
                              className="tw-profile--button edit"
                              onClick={this.editProfile}
                            >
                              Edit profile
                            </Button>
                          );
                        } else {
                          if (userProfile.followed) {
                            return (
                              <Button
                                pill
                                className="tw-profile--button follow following"
                                onClick={() =>
                                  this.unfollowUser(userProfile.username)
                                }
                              >
                                Following
                              </Button>
                            );
                          } else {
                            return (
                              <Button
                                pill
                                className="tw-profile--button follow"
                                onClick={() =>
                                  this.followUser(userProfile.username)
                                }
                              >
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
                    {userProfile.name}
                  </span>
                  <span className="tw-profile-header--name-user">
                    @{userProfile.username}
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(ProfileHeader);
