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
    localStorage.setItem(
      "authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBmYjFjY2UwZTM4YzNiZjgwYjQ5NzgiLCJ1c2VybmFtZSI6InJlemt5MDYiLCJpYXQiOjE2Mjg2NTM1NTIsImV4cCI6MTYyODY1NzE1Mn0.potvzTr0sW6atvhE1Hf_7WY3uGP2EeHBeVO4JZ6K_oc"
    );

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
        <Header />

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
