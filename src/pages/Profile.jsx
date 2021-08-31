import React from "react";
import { withRouter } from "react-router-dom";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import ProfileDetail from "@/components/profiles/ProfileDetail";
import ProfileHeader from "@/components/profiles/ProfileHeader";
import ProfileNavigation from "@/components/profiles/ProfileNavigation";
import ProfileTimeline from "@/components/profiles/ProfileTimeline";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: this.props.match.params ?? null,
    };
  }
  componentDidMount() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="tw-profile">
        <DefaultLayout
          title={
            <div className="tw-profile-title">
              <span>Rezky Setiawan</span>
              <span className="tw-profile-title--tweet-count">123 Tweets</span>
            </div>
          }
        >
          <ProfileHeader />
          <ProfileDetail />
          <ProfileNavigation />
          <ProfileTimeline />
        </DefaultLayout>
      </div>
    );
  }
}

export default withRouter(Profile);
