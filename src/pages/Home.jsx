import React from "react";

import Header from "@/components/layouts/Header";
import ComposeButton from "@/components/ComposeButton";
import Navigation from "../components/layouts/Navigation";
import Tweet from "@/components/tweets/Tweet";
import API from "@/functions/apis";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("authorization"));
    API.get("/tweet").then(({ data }) => {
      this.setState({
        tweets: data?.data,
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
      <div className="tw-home">
        <Header isHome />

        <div>
          {this.state.tweets.map((value, index) => {
            return <Tweet key={index} {...value} />;
          })}
        </div>

        <Navigation />

        <ComposeButton />
      </div>
    );
  }
}

export default Home;
