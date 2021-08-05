import React from "react";

import { ReactComponent as CommentIcon } from "@/assets/icons/Comment.svg";
import { ReactComponent as RetweetIcon } from "@/assets/icons/Retweet.svg";
import { ReactComponent as LikeIcon } from "@/assets/icons/Like.svg";
import { ReactComponent as ShareIcon } from "@/assets/icons/Share.svg";
import Icon from "@/components/Icon";

class TweetFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSize: "1rem",
    };
  }
  render() {
    return (
      <div className="tw-tweet-footer">
        <div className="tw-tweet-footer-item">
          <span className="tw-tweet-footer-item--count">12</span>
          <Icon icon={<CommentIcon />} size={this.state.iconSize} />
        </div>
        <div className="tw-tweet-footer-item">
          <span className="tw-tweet-footer-item--count">12</span>
          <Icon icon={<RetweetIcon />} size={this.state.iconSize} />
        </div>
        <div className="tw-tweet-footer-item">
          <span className="tw-tweet-footer-item--count">12</span>
          <Icon icon={<LikeIcon />} size={this.state.iconSize} />
        </div>
        <div className="tw-tweet-footer-item">
          <Icon icon={<ShareIcon />} size={this.state.iconSize} />
        </div>
      </div>
    );
  }
}

export default TweetFooter;
