import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as WorldIcon } from "@/assets/icons/World.svg";
import { ReactComponent as GifIcon } from "@/assets/icons/Gif.svg";
import { ReactComponent as ImageIcon } from "@/assets/icons/Image.svg";
import { ReactComponent as PollIcon } from "@/assets/icons/Poll.svg";
import { ReactComponent as ScheduleIcon } from "@/assets/icons/Schedule.svg";
import { ReactComponent as StickerIcon } from "@/assets/icons/Sticker.svg";
import Hairline from "@/components/Hairline";
import TweetModalVisibility from "@/components/tweets/TweetModalVisibility";

class ComposeTweetSetting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyPermission: "Everyone",
    };
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  onVisibilityChange(value) {
    this.setState(
      { replyPermission: value ?? this.state.replyPermission },
      () => this.props.onChange(this.state)
    );
  }

  render() {
    return (
      <div className="tw-compose-tweet-fill-content--content-settings">
        <TweetModalVisibility
          onChange={this.onVisibilityChange}
          trigger={
            <div className="tw-compose-tweet-fill-content--content-permission">
              <Icon icon={<WorldIcon />} size="1rem" />
              <span>{this.state.replyPermission} can Reply</span>
            </div>
          }
        />
        <Hairline />
        <div className="tw-compose-tweet-fill-content--content-options">
          <Icon icon={<GifIcon />} />
          <Icon icon={<ImageIcon />} />
          <Icon icon={<PollIcon />} />
          <Icon icon={<StickerIcon />} />
          <Icon icon={<ScheduleIcon />} />
        </div>
      </div>
    );
  }
}

ComposeTweetSetting.defaultProps = {
  onChange: () => {},
};
export default ComposeTweetSetting;
