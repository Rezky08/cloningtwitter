import React from "react";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import { ReactComponent as ArrowLeftIcon } from "@/assets/icons/ArrowLeft.svg";
import Textarea from "@/components/Textarea";
import { Link } from "react-router-dom";
import ComposeTweetSetting from "@/components/compose_tweets/ComposeTweetSetting";
import API from "@/functions/apis";

class ComposeTweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
      submit: false,
      replyPermission: null,
    };
    this.validation = {
      text: {
        max: 200,
      },
    };

    this.onTweetChange = this.onTweetChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTweetSettingChange = this.onTweetSettingChange.bind(this);
  }
  tweetValidation() {
    if (
      this.state.text?.length <= this.validation.text.max &&
      this.state.text?.length !== 0
    ) {
      if (!this.state.submit) {
        this.setState({
          submit: true,
        });
      }
    } else {
      if (this.state.submit) {
        this.setState({
          submit: false,
        });
      }
    }
  }
  onTweetChange(text) {
    this.setState(
      {
        text: text ?? this.state.text,
      },
      () => this.tweetValidation()
    );
  }
  onTweetSettingChange(settings) {
    this.setState({ ...this.state, ...settings });
  }
  onSubmit() {
    API.post("/tweet", this.state).then(({ data }) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className="tw-compose-tweet">
        <div className="tw-compose-tweet-header">
          <Link to="/">
            <Icon icon={<ArrowLeftIcon />} size="1.4rem" />
          </Link>
          <Button
            pill
            disabled={!this.state.submit}
            className="tw-compose-tweet-button--submit"
            onClick={this.onSubmit}
          >
            <span>Tweet</span>
          </Button>
        </div>
        <div className="tw-compose-tweet-fill-content">
          <div className="tw-compose-tweet-fill-content--profile">
            <Avatar />
          </div>
          <div className="tw-compose-tweet-fill-content--content">
            <Textarea
              placeholder="What's Happening?"
              className="tw-compose-tweet-fill-content--content-textarea"
              onChange={this.onTweetChange}
            />
            <ComposeTweetSetting onChange={this.onTweetSettingChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default ComposeTweet;
