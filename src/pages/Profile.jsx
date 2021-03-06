import React from "react";
import { withRouter } from "react-router-dom";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import ProfileDetail from "@/components/profiles/ProfileDetail";
import ProfileHeader from "@/components/profiles/ProfileHeader";
import ProfileNavigation from "@/components/profiles/ProfileNavigation";
import ProfileTimeline from "@/components/profiles/ProfileTimeline";
import { getUserProfileRequest } from "@/functions/apiRequests";
import UserContext from "../components/UserContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getProfile = this.getProfile.bind(this);
    this.state = {
      username: this.props?.match?.params?.username ?? null,
      getProfile: this.getProfile,
    };
  }
  componentDidMount() {
    this.getProfile();
  }
  getProfile() {
    getUserProfileRequest(this.state.username).then((data) => {
      this.setState(data);
    });
  }
  render() {
    return (
      <div className="tw-profile">
        <UserContext.Provider value={this.state}>
          <DefaultLayout
            title={
              <div className="tw-profile-title">
                <span>{this.state.name}</span>
                <span className="tw-profile-title--tweet-count">
                  123 Tweets
                </span>
              </div>
            }
          >
            <ProfileHeader />
            <ProfileDetail />
            <ProfileNavigation />
            <ProfileTimeline
              username={this.state.username}
              name={this.state.name}
            />
          </DefaultLayout>
        </UserContext.Provider>
      </div>
    );
  }
}

export default withRouter(Profile);
