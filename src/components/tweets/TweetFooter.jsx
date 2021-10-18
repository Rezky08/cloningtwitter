import React from "react";

import { ReactComponent as CommentIcon } from "@/assets/icons/Comment.svg";
import { ReactComponent as RetweetIcon } from "@/assets/icons/Retweet.svg";
import { ReactComponent as LikeIcon } from "@/assets/icons/Like.svg";
import { ReactComponent as LikeActiveIcon } from "@/assets/icons/LikeActive.svg";
import { ReactComponent as ShareIcon } from "@/assets/icons/Share2.svg";
import Icon from "@/components/Icon";
import { Link } from "react-router-dom";
import API from "@/functions/apis";
import TweetContext from "@/components/tweets/TweetContext";

class TweetFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSize: "1rem",
      ...props?.count,
    };
  }
  onClick(url, isPost = false, callback = () => {}) {
    if (isPost) {
      API.post(url).then(({ data }) => {
        callback(data?.data);
      });
    } else {
      API.delete(url).then(({ data }) => {
        callback(data?.data);
      });
    }
  }

  render() {
    return (
      <TweetContext.Consumer>
        {({ setTweet }) => {
          return (
            <div className="tw-tweet-footer">
              <Link to={`/reply?tweetId=${this.props._id}`}>
                <div className="tw-tweet-footer-item">
                  <Icon icon={<CommentIcon />} size={this.state.iconSize} />
                  <span className="tw-tweet-footer-item--count">
                    {this.props.count?.replies}
                  </span>
                </div>
              </Link>
              <div
                className={[
                  "tw-tweet-footer-item",
                  !this.props.flag?.retweeted ? "retweet" : "retweet-active",
                ].join(" ")}
              >
                <span
                  onClick={() => {
                    this.onClick(
                      `/tweet/retweet/${this.props._id}`,
                      !this.props.flag?.retweeted,
                      setTweet
                    );
                  }}
                >
                  <Icon icon={<RetweetIcon />} size={this.state.iconSize} />
                </span>
                <span className="tw-tweet-footer-item--count">
                  {this.props.count?.retweet}
                </span>
              </div>
              <div
                className={[
                  "tw-tweet-footer-item",
                  !this.props.flag?.liked ? "like" : "like-active",
                ].join(" ")}
              >
                <span
                  onClick={() => {
                    this.onClick(
                      `/tweet/like/${this.props._id}`,
                      !this.props.flag?.liked,
                      setTweet
                    );
                  }}
                >
                  <Icon
                    icon={
                      !this.props.flag?.liked ? (
                        <LikeIcon />
                      ) : (
                        <LikeActiveIcon />
                      )
                    }
                    size={this.state.iconSize}
                  />
                </span>
                <span className="tw-tweet-footer-item--count">
                  {this.props.count?.likes}
                </span>
              </div>
              <div className="tw-tweet-footer-item">
                <Icon icon={<ShareIcon />} size={this.state.iconSize} />
              </div>
            </div>
          );
        }}
      </TweetContext.Consumer>
    );
  }
}

export default TweetFooter;
