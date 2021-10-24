import React from "react";

import Tweet from "@/components/tweets/Tweet";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { getTimelineRequest } from "../functions/apiRequests";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    getTimelineRequest().then((data) => {
      this.setState({
        tweets: data,
      });
    });
  }
  // componentDidUpdate() {
  //   API.get("/tweet").then(({ data }) => {
  //     this.setState({
  //       tweets: data?.data,
  //     });
  //   });
  // }
  render() {
    return (
      <div className="tw-timeline">
        <DefaultLayout isHome>
          {this.state.tweets?.map((value, index) => {
            return (
              <div className="tw-timeline-tweets" key={index}>
                <Tweet {...value} hasReply={value?.replies?.length > 0} />

                <div className="tw-timeline-tweets-replies">
                  {value?.replies?.map((reply, replyIndex) => {
                    return (
                      <Tweet
                        key={`${index}-${replyIndex}`}
                        {...reply}
                        hasReply={value?.replies?.length - 1 > replyIndex}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </DefaultLayout>
      </div>
    );
  }
}

export default Home;
