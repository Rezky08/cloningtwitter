import React from "react";
import Avatar from "@/components/Avatar";

import TweetFooter from "./TweetFooter";

class Tweet extends React.Component {
  render() {
    return (
      <div className="tw-tweet">
        <div className="tw-tweet-profile">
          <Avatar />
        </div>
        <div className="tw-tweet-content">
          <div className="tw-tweet-header">
            <div className="tw-tweet-header--left">
              <span className="tw-tweet-display-name">Username</span>
              <span className="tw-tweet-username">@username</span>
              <span className="tw-dot-separator">.</span>
              <div className="tw-tweet-time-diff">20h</div>
            </div>
            <div className="tw-tweet-header--right"> ... </div>
          </div>
          <div className="tw-tweet-fill-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ante libero, blandit quis tortor a, pellentesque efficitur urna.
              Pellentesque ultricies molestie diam, quis rhoncus massa pulvinar
              accumsan. Nunc tincidunt nisi diam, consectetur pretium nisl
              interdum at. Praesent vestibulum urna odio,
            </p>
          </div>
          <TweetFooter />
        </div>
      </div>
    );
  }
}

export default Tweet;
