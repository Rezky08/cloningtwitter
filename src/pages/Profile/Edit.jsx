import React from "react";
import { withRouter } from "react-router-dom";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {
  getUserProfileRequest,
  updateUserProfileRequest,
} from "@/functions/apiRequests";
import UserContext from "@/components/UserContext";
import ProfileOnlyHeader from "@/components/profiles/ProfileOnlyHeader";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.getProfile = this.getProfile.bind(this);
    const user = JSON.parse(localStorage.getItem("user"));
    this.state = {
      username: user?.username ?? null,
      getProfile: this.getProfile,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.getProfile();
  }
  onSubmit() {
    updateUserProfileRequest(this.state).then((data) => {
      console.log(data);
    });
  }
  getProfile() {
    getUserProfileRequest(this.state.username).then((data) => {
      this.setState(data);
    });
  }
  onChange(stateField, value) {
    let assignValue = {};
    assignValue[stateField] = value;
    this.setState(assignValue);
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        <DefaultLayout
          title={<div className="tw-profile-edit-title">Edit Profile</div>}
          right={
            <Button
              pill
              className="tw-profile-edit-button--submit"
              onClick={this.onSubmit}
            >
              <span>Save</span>
            </Button>
          }
        >
          <ProfileOnlyHeader />
          <div className="tw-profile-edit">
            <div className="tw-profile-edit--form">
              <Input
                placeholder="Name"
                value={this.state.name}
                onChange={(value) => this.onChange("name", value)}
              />
              <Textarea
                placeholder="Bio"
                bordered
                value={this.state.description}
                onChange={(value, HTMLValue) =>
                  this.onChange("description", HTMLValue)
                }
              />
              <Input
                placeholder="Location"
                value={this.state.location}
                onChange={(value) => this.onChange("location", value)}
              />
              <Input
                placeholder="Website"
                value={this.state.link}
                onChange={(value) => this.onChange("link", value)}
              />
            </div>
          </div>
        </DefaultLayout>
      </UserContext.Provider>
    );
  }
}

export default withRouter(Edit);
