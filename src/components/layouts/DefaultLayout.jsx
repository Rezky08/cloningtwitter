import React from "react";
import Header from "@/components/layouts/Header";
import ComposeButton from "@/components/ComposeButton";
import Navigation from "@/components/layouts/Navigation";

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="tw-default-layout">
        <Header
          isHome={this.props.isHome}
          left={this.props.left}
          right={this.props.right}
          title={this.props.title}
          borderless={this.props.borderless}
        />
        <div>{this.props.children}</div>

        <Navigation />

        <ComposeButton />
      </div>
    );
  }
}

export default DefaultLayout;
