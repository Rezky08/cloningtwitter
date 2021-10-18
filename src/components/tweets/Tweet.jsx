import React from "react";
import Avatar from "@/components/Avatar";
import TweetContext from "@/components/tweets/TweetContext";
import TweetFooter from "./TweetFooter";
import moment from "moment";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.setTweet = this.setTweet.bind(this);
    this.state = {
      tweet: {
        ...props,
        timeDiff: moment(props.created_at).fromNow(true),
        footer: props.footer ?? true,
      },
      setTweet: this.setTweet,
    };
  }

  setTweet(tweet) {
    this.setState({
      tweet: {
        ...tweet,
        timeDiff: moment(tweet.created_at).fromNow(true),
        footer: this.props.footer ?? true,
      },
    });
  }

  componentDidUpdate(props, state) {
    const { text } = this.props;
    if (
      props.text !== text ||
      Object.keys(this.props).length !== Object.keys(props).length
    ) {
      this.setTweet(this.props);
    }
  }

  render() {
    return (
      <TweetContext.Provider value={this.state}>
        <div className="tw-tweet">
          <div className="tw-tweet-profile">
            <Avatar />
            {this.state.tweet?.hasReply ? (
              <div className="tw-tweet-has-reply"></div>
            ) : null}
          </div>
          <div className="tw-tweet-content">
            <div className="tw-tweet-header">
              <div className="tw-tweet-header--left">
                <span className="tw-tweet-display-name">
                  {this.state.tweet?.name}
                </span>
                <span className="tw-tweet-username">
                  @{this.state.tweet?.username}
                </span>
                <span className="tw-dot-separator">·</span>
                <div className="tw-tweet-time-diff">
                  {this.state.tweet?.timeDiff}
                </div>
              </div>
              <div className="tw-tweet-header--right">
                <span>...</span>
              </div>
            </div>
            <div className="tw-tweet-fill-content">
              <p>{this.state.tweet?.text}</p>
            </div>
            {this.state.tweet.footer ? (
              <TweetFooter {...this.state.tweet} />
            ) : null}
          </div>
        </div>
      </TweetContext.Provider>
    );
  }
}

export default Tweet;
