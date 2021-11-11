import react from "react";
import Avatar from "@/components/Avatar";

class ProfileOnlyHeader extends react.Component {
  render() {
    return (
      <div>
        <div className="tw-profile-header">
          <div className="tw-profile-header--image"></div>
          <div className="tw-profile-header-container">
            <div className="tw-profile-header--avatar-container">
              <div className="tw-profile-header--avatar">
                <Avatar xxl />
              </div>
              <div className="">{this.props.rightHeader}</div>
            </div>
            {this.props.bottomHeader}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileOnlyHeader;
