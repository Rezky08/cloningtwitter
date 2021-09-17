import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as LinkIcon } from "@/assets/icons/Link.svg";
import { ReactComponent as CalendarIcon } from "@/assets/icons/Calendar.svg";
import { ReactComponent as PinLocationIcon } from "@/assets/icons/PinLocation.svg";
import UserContext from "../UserContext";

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
      <UserContext.Consumer>
        {(user) => {
          return (
            <div className="tw-profile-detail">
              {user.description ? (
                <div className="tw-profile-detail--bio">{user.description}</div>
              ) : null}
              <div className="tw-profile-detail--extra-container">
                {user.location ? (
                  <div className="tw-profile-detail--map">
                    <Icon icon={<PinLocationIcon />} />
                    <span>{user.location}</span>
                  </div>
                ) : null}
                {user.link ? (
                  <div className="tw-profile-detail--website">
                    <Icon icon={<LinkIcon />} />
                    <span>{user.link}</span>
                  </div>
                ) : null}
                {user.createdAt ? (
                  <div className="tw-profile-detail--joined-date">
                    <Icon icon={<CalendarIcon />} />
                    <span>{user.createdAt}</span>
                  </div>
                ) : null}
              </div>
              <div className="tw-profile-detail--follow-container">
                <div className="tw-profile-detail--follow-following-container">
                  <span className="tw-profile-detail--follow-count">
                    {user.following}
                  </span>
                  <span>Following</span>
                </div>
                <div className="tw-profile-detail--follow-follower-container">
                  <span className="tw-profile-detail--follow-count">
                    {user.followers}
                  </span>
                  <span>Followers</span>
                </div>
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ProfileDetail;
