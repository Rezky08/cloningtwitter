import React from "react";
import Tweet from "../tweets/Tweet";

class ProfileTimeline extends React.Component {
  render() {
    return (
      <div className="tw-profile-timeline">
        {[...Array(10)].map((value, index) => {
          return <Tweet key={index} />;
        })}
      </div>
    );
  }
}

export default ProfileTimeline;
