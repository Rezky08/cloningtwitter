import React from "react";
// import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import { ReactComponent as ArrowLeftIcon } from "@/assets/icons/ArrowLeft.svg";
import { ReactComponent as TwitterIcon } from "@/assets/icons/Twitter.svg";
import GoBack from "@/components/GoBack";
import Header from "@/components/layouts/Header";
import Input from "@/components/Input";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddExistingAccount: props.isAddExistingAccount ?? false,
    };
  }
  render() {
    let header;
    let title;
    if (this.state.isAddExistingAccount) {
      title = "Add Existing Account";
      header = (
        <Header
          className="tw-login-header"
          left={
            <GoBack>
              <Icon icon={<ArrowLeftIcon />} size="1.4rem" />
            </GoBack>
          }
          title={title}
        />
      );
    } else {
      title = "Log in to Twitter";
      header = (
        <div className="tw-login-header login">
          <Icon icon={<TwitterIcon />} size="3rem" />
        </div>
      );
    }
    return (
      <div className="tw-login">
        {header}
        <div className="tw-login-body">
          <div className="tw-login-title">{title}</div>
          <Input />
          <Input type="password" />
        </div>
      </div>
    );
  }
}

export default Login;
