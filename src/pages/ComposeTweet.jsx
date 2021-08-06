import React from "react";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import { ReactComponent as ArrowLeftIcon } from "@/assets/icons/ArrowLeft.svg";
import { ReactComponent as WorldIcon } from "@/assets/icons/World.svg";
import { ReactComponent as GifIcon } from "@/assets/icons/Gif.svg";
import { ReactComponent as ImageIcon } from "@/assets/icons/Image.svg";
import { ReactComponent as PollIcon } from "@/assets/icons/Poll.svg";
import { ReactComponent as ScheduleIcon } from "@/assets/icons/Schedule.svg";
import { ReactComponent as StickerIcon } from "@/assets/icons/Sticker.svg";
import Textarea from "@/components/Textarea";
import Hairline from "@/components/Hairline";
import { Link } from "react-router-dom";

class ComposeTweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: null,
      replyPermission: "Everyone",
    };

    this.onTweetChange = this.onTweetChange.bind(this);
  }
  onTweetChange(tweet) {
    this.setState({
      tweet: tweet ?? this.state.tweet,
    });
  }
  render() {
    return (
      <div className="tw-compose-tweet">
        <div className="tw-compose-tweet-header">
          <Link to="/">
            <Icon icon={<ArrowLeftIcon />} size="1.4rem" />
          </Link>
          <Button pill className="tw-compose-tweet-button--submit">
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
            <div className="tw-compose-tweet-fill-content--content-permission">
              <Icon icon={<WorldIcon />} size="1rem" />
              <span>{this.state.replyPermission} can Reply</span>
            </div>
            <Hairline />
            <div className="tw-compose-tweet-fill-content--content-options">
              <Icon icon={<GifIcon />} />
              <Icon icon={<ImageIcon />} />
              <Icon icon={<PollIcon />} />
              <Icon icon={<StickerIcon />} />
              <Icon icon={<ScheduleIcon />} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ComposeTweet;
