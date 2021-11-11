import React from "react";
import { withRouter } from "react-router-dom";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.getProfile = this.getProfile.bind(this);
    // this.state = {
    //   username: this.props?.match?.params?.username ?? null,
    //   getProfile: this.getProfile,
    // };
  }
  componentDidMount() {
    this.getProfile();
  }
  getProfile() {
    // getUserProfileRequest(this.state.username).then((data) => {
    //   this.setState(data);
    // });
  }
  render() {
    return (
      <div className="tw-profile-edit">
        test
        {/* <UserContext.Provider value={this.state}>
          <DefaultLayout
            title={<div className="tw-profile-edit-title">Edit Profile</div>}
          >
            <ProfileHeader />
          </DefaultLayout>
        </UserContext.Provider> */}
      </div>
    );
  }
}

export default withRouter(Edit);
