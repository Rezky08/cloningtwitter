import React from "react";

import { ReactComponent as CommentIcon } from "@/assets/icons/Comment.svg";
import { ReactComponent as RetweetIcon } from "@/assets/icons/Retweet.svg";
import { ReactComponent as LikeIcon } from "@/assets/icons/Like.svg";
import { ReactComponent as ShareIcon } from "@/assets/icons/Share2.svg";
import Icon from "@/components/Icon";
import { Link } from "react-router-dom";

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
        <Link to={`/reply?tweetId=${this.props._id}`}>
          <div className="tw-tweet-footer-item">
            <Icon icon={<CommentIcon />} size={this.state.iconSize} />
            <span className="tw-tweet-footer-item--count">12</span>
          </div>
        </Link>
        <div className="tw-tweet-footer-item">
          <Icon icon={<RetweetIcon />} size={this.state.iconSize} />
          <span className="tw-tweet-footer-item--count">12</span>
        </div>
        <div className="tw-tweet-footer-item">
          <Icon icon={<LikeIcon />} size={this.state.iconSize} />
          <span className="tw-tweet-footer-item--count">12</span>
        </div>
        <div className="tw-tweet-footer-item">
          <Icon icon={<ShareIcon />} size={this.state.iconSize} />
        </div>
      </div>
    );
  }
}

export default TweetFooter;
