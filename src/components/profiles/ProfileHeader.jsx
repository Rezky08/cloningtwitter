import React from "react";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import AuthContext from "../AuthContext";
import UserContext from "../UserContext";
import API from "@/functions/apis";
import { withRouter } from "react-router";
import ProfileOnlyHeader from "@/components/profiles/ProfileOnlyHeader";

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

  followUser(username, callback = () => {}) {
    API.post(`/follow/${username}`).then(() => {
      this.setState({ following: true });
      callback();
    });
  }
  unfollowUser(username, callback = () => {}) {
    API.delete(`/follow/${username}`).then(() => {
      this.setState({ following: true });
      callback();
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
            <div className="tw-profile">
              <ProfileOnlyHeader
                rightHeader={
                  <AuthContext.Consumer>
                    {({ user }) => {
                      if (user?.username === userProfile?.username) {
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
                        return (
                          <Button
                            pill
                            className={[
                              "tw-profile--button follow",
                              userProfile?.followed ? "following" : null,
                            ].join(" ")}
                            onClick={() =>
                              userProfile?.followed
                                ? this.unfollowUser(
                                    userProfile?.username,
                                    userProfile.getProfile
                                  )
                                : this.followUser(
                                    userProfile?.username,
                                    userProfile.getProfile
                                  )
                            }
                          >
                            {userProfile?.followed ? "Following" : "Follow"}
                          </Button>
                        );
                      }
                    }}
                  </AuthContext.Consumer>
                }
                bottomHeader={
                  <div className="tw-profile-header--name-container">
                    <span className="tw-profile-header--name-display">
                      {userProfile?.name}
                    </span>
                    <span className="tw-profile-header--name-user">
                      @{userProfile?.username}
                    </span>
                  </div>
                }
              />
            </div>
            // <div className="tw-profile-header">
            //   <div className="tw-profile-header--image"></div>
            //   <div className="tw-profile-header-container">
            //     <div className="tw-profile-header--avatar-container">
            //       <div className="tw-profile-header--avatar">
            //         <Avatar xxl />
            //       </div>
            //       <div className="">
            // <AuthContext.Consumer>
            //   {({ user }) => {
            //     if (user?.username === userProfile?.username) {
            //       return (
            //         <Button
            //           pill
            //           className="tw-profile--button edit"
            //           onClick={this.editProfile}
            //         >
            //           Edit profile
            //         </Button>
            //       );
            //     } else {
            //       return (
            //         <Button
            //           pill
            //           className={[
            //             "tw-profile--button follow",
            //             userProfile?.followed ? "following" : null,
            //           ].join(" ")}
            //           onClick={() =>
            //             userProfile?.followed
            //               ? this.unfollowUser(
            //                   userProfile?.username,
            //                   userProfile.getProfile
            //                 )
            //               : this.followUser(
            //                   userProfile?.username,
            //                   userProfile.getProfile
            //                 )
            //           }
            //         >
            //           {userProfile?.followed ? "Following" : "Follow"}
            //         </Button>
            //       );
            //     }
            //   }}
            // </AuthContext.Consumer>
            //       </div>
            //     </div>
            //     <div className="tw-profile-header--name-container">
            //       <span className="tw-profile-header--name-display">
            //         {userProfile?.name}
            //       </span>
            //       <span className="tw-profile-header--name-user">
            //         @{userProfile?.username}
            //       </span>
            //     </div>
            //   </div>
            // </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(ProfileHeader);
