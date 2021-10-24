import React from "react";
import Tweet from "../tweets/Tweet";
import { getTimelineRequest } from "@/functions/apiRequests";

class ProfileTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: props?.tweets ?? [],
    };
  }
  componentDidMount() {
    getTimelineRequest(this.props.username).then((data) => {
      this.setState({
        tweets: data,
      });
    });
  }
  render() {
    return (
      <div className="tw-profile-timeline">
        {this.state?.tweets?.map((value, index) => {
          return <Tweet key={index} {...value} />;
        })}
      </div>
    );
  }
}

export default ProfileTimeline;
