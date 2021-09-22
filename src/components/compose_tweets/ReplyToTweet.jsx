import React from "react";
import Tweet from "@/components/tweets/Tweet";
import { withRouter } from "react-router";
import API from "@/functions/apis";

class ReplyToTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetId:
        new URLSearchParams(props.location.search).get("tweetId") ?? null,
    };
    API.get(`/tweet/${this.state.tweetId}`)
      .then(({ data }) => {
        this.setState({ ...data.data });
      })
      .catch(() => {
        props.history.push("/");
      });
  }
  getTweet() {}
  render() {
    return (
      <div className="tw-reply-to-tweet">
        <Tweet {...this.state} footer={false}></Tweet>
      </div>
    );
  }
}

export default withRouter(ReplyToTweet);
