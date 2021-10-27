import React from "react";
import Tweet from "../tweets/Tweet";

import { ReactComponent as RetweetIcon } from "@/assets/icons/Retweet.svg";
import { ReactComponent as LikeIcon } from "@/assets/icons/Like.svg";
import Icon from "@/components/Icon";

import { getTimelineRequest } from "@/functions/apiRequests";

class ProfileTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: props?.tweets ?? [],
    };
    this.userFlagTitle = this.userFlagTitle.bind(this);
  }
  componentDidMount() {
    getTimelineRequest(this.props.username).then((data) => {
      this.setState({
        tweets: data,
      });
    });
  }

  userFlagIcon(tweet) {
    return tweet.userFlag ? (
      <span>
        <Icon icon={<RetweetIcon />} size="1rem" />
      </span>
    ) : tweet.userFlag?.liked ? (
      <span>
        <Icon icon={<LikeIcon />} size="1rem" />
      </span>
    ) : null;
  }
  userFlagTitle(tweet) {
    return tweet.userFlag ? (
      <span>{this.props.name} Retweeted</span>
    ) : tweet.userFlag?.liked ? (
      <span>{this.props.name} Liked</span>
    ) : null;
  }

  render() {
    return (
      <div className="tw-profile-timeline">
        {this.state?.tweets?.map((value, index) => {
          return (
            <div key={index}>
              <div className="tw-userflag">
                {this.userFlagIcon(value)}
                {this.userFlagTitle(value)}
              </div>
              <Tweet {...value} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProfileTimeline;
