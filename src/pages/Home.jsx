import React from "react";

import Tweet from "@/components/tweets/Tweet";
import API from "@/functions/apis";
import DefaultLayout from "../components/layouts/DefaultLayout";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    API.get("/tweet")
      .then(({ data }) => {
        this.setState({
          tweets: data?.data,
        });
      })
      .catch(() => {});
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
      <div className="tw-home">
        <DefaultLayout isHome>
          {this.state.tweets.map((value, index) => {
            return <Tweet key={index} {...value} />;
          })}
        </DefaultLayout>
      </div>
    );
  }
}

export default Home;
