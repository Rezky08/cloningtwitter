import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as LinkIcon } from "@/assets/icons/Link.svg";
import { ReactComponent as CalendarIcon } from "@/assets/icons/Calendar.svg";
import { ReactComponent as PinLocationIcon } from "@/assets/icons/PinLocation.svg";

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: props.bio ?? null,
      location: props.location ?? "test",
      website: props.website ?? "test",
      joinedDate: props.joinedDate ?? "test",
    };
  }
  render() {
    return (
      <div className="tw-profile-detail">
        {this.state.bio ? (
          <div className="tw-profile-detail--bio">{this.state.bio}</div>
        ) : null}
        <div className="tw-profile-detail--extra-container">
          {this.state.location ? (
            <div className="tw-profile-detail--map">
              <Icon icon={<PinLocationIcon />} />
              <span>{this.state.location}</span>
            </div>
          ) : null}
          {this.state.website ? (
            <div className="tw-profile-detail--website">
              <Icon icon={<LinkIcon />} />
              <span>{this.state.website}</span>
            </div>
          ) : null}
          {this.state.joinedDate ? (
            <div className="tw-profile-detail--joined-date">
              <Icon icon={<CalendarIcon />} />
              <span>{this.state.joinedDate}</span>
            </div>
          ) : null}
        </div>
        <div className="tw-profile-detail--follow-container">
          <div className="tw-profile-detail--follow-following-container">
            <span className="tw-profile-detail--follow-count">439</span>
            <span>Following</span>
          </div>
          <div className="tw-profile-detail--follow-follower-container">
            <span className="tw-profile-detail--follow-count">439</span>
            <span>Followers</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDetail;
