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
    this.getTweet = this.getTweet.bind(this);
  }

  componentDidMount() {
    this.getTweet();
  }

  getTweet() {
    API.get(`/tweet/${this.state.tweetId}`)
      .then(({ data }) => {
        this.setState({ ...data.data });
      })
      .catch(() => {
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <div className="tw-reply-to-tweet">
        <Tweet {...this.state} footer={false}></Tweet>
      </div>
    );
  }
}

export default withRouter(ReplyToTweet);
