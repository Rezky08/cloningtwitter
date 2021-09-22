import React from "react";
import { withRouter } from "react-router";

class Logout extends React.Component {
  componentDidMount() {
    localStorage.removeItem("user");
    localStorage.removeItem("authorization");
    window.location.href = "/login";
  }
  render() {
    return <div className="tw-logout"></div>;
  }
}

export default withRouter(Logout);
