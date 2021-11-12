import React from "react";
import { withRouter } from "react-router-dom";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { getUserProfileRequest } from "@/functions/apiRequests";
import UserContext from "@/components/UserContext";
import ProfileOnlyHeader from "@/components/profiles/ProfileOnlyHeader";
import Input from "@/components/Input";

class Edit extends React.Component {
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
      <div className="tw-profile-edit">
        <UserContext.Provider value={this.state}>
          <DefaultLayout
            title={<div className="tw-profile-edit-title">Edit Profile</div>}
          >
            <ProfileOnlyHeader />
            <div className="tw-profile-edit--form">
              <Input />
            </div>
          </DefaultLayout>
        </UserContext.Provider>
      </div>
    );
  }
}

export default withRouter(Edit);
