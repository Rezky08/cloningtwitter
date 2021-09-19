import React from "react";
import Tweet from "@/components/tweets/Tweet";
import { withRouter } from "react-router";

class ReplyToTweet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="tw-reply-to-tweet">
        <Tweet></Tweet>
      </div>
    );
  }
}

export default withRouter(ReplyToTweet);
