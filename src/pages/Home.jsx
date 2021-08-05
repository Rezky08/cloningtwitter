import React from "react";

import Header from "@/components/layouts/Header";
import ComposeButton from "@/components/ComposeButton";
import Navigation from "../components/layouts/Navigation";
import Tweet from "@/components/tweets/Tweet";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />

        {[...Array(10)].map((value, index) => {
          return <Tweet key={index} />;
        })}

        <Navigation />

        <ComposeButton />
      </div>
    );
  }
}

export default Home;
