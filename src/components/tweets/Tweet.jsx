import React from "react";
import Avatar from "@/components/Avatar";

import TweetFooter from "./TweetFooter";
import moment from "moment";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeDiff: moment(this.props.created_at).fromNow(true),
    };
  }
  render() {
    return (
      <div className="tw-tweet">
        <div className="tw-tweet-profile">
          <Avatar />
        </div>
        <div className="tw-tweet-content">
          <div className="tw-tweet-header">
            <div className="tw-tweet-header--left">
              <span className="tw-tweet-display-name">
                {this.props.user?.username}
              </span>
              <span className="tw-tweet-username">
                @{this.props.user?.username}
              </span>
              <span className="tw-dot-separator">·</span>
              <div className="tw-tweet-time-diff">{this.state.timeDiff}</div>
            </div>
            <div className="tw-tweet-header--right">
              <span>...</span>
            </div>
          </div>
          <div className="tw-tweet-fill-content">
            <p>{this.props.text}</p>
          </div>
          <TweetFooter />
        </div>
      </div>
    );
  }
}

export default Tweet;
