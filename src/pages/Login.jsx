import React from "react";
// import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import { ReactComponent as ArrowLeftIcon } from "@/assets/icons/ArrowLeft.svg";
import { ReactComponent as TwitterIcon } from "@/assets/icons/Twitter.svg";
import GoBack from "@/components/GoBack";
import Header from "@/components/layouts/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { login } from "@/functions/Auth.js";
import AuthContext from "../components/AuthContext";
import { Route, Redirect } from "react-router-dom";
import { getMe } from "../functions/Auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddExistingAccount: props.isAddExistingAccount ?? false,
      username: props.username ?? null,
      password: props.password ?? null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.passwordInputRef = React.createRef();
  }

  onSubmit(setUserCallback = () => {}) {
    login(this.state).then((data) => {
      if (localStorage.getItem("authorization")) {
        getMe().then((user) => {
          setUserCallback(user);
          window.location.href = "/";
        });
      }
    });
    // getMe();
  }
  componentDidMount() {
    console.log(this.passwordInputRef.current.inputRef);
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
          <AuthContext.Consumer>
            {({ user, setUser }) => {
              return user ? (
                <Route
                  render={({ location }) => (
                    <Redirect
                      to={{
                        pathname: "/",
                        state: { from: location },
                      }}
                    />
                  )}
                />
              ) : (
                <div className="tw-login-form">
                  <Input
                    placeholder="Phone, email, or username"
                    value={this.state.username}
                    onChange={(value) =>
                      this.setState({ username: value ?? this.state.username })
                    }
                  />
                  <Input
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(value) =>
                      this.setState({ password: value ?? this.state.password })
                    }
                    ref={this.passwordInputRef}
                    type="password"
                  />
                  <Button
                    pill
                    size="lg"
                    className="tw-login-form-submit"
                    onClick={() => {
                      this.onSubmit(setUser);
                    }}
                  >
                    <span>Login</span>
                  </Button>
                </div>
              );
            }}
          </AuthContext.Consumer>
        </div>
      </div>
    );
  }
}

export default Login;
