import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as WorldLineIcon } from "@/assets/icons/lines/World.svg";
import { ReactComponent as AtIcon } from "@/assets/icons/At.svg";
import { ReactComponent as PeopleFollowIcon } from "@/assets/icons/PeopleFollow.svg";
import { ReactComponent as WorldIcon } from "@/assets/icons/World.svg";
import { ReactComponent as GifIcon } from "@/assets/icons/Gif.svg";
import { ReactComponent as ImageIcon } from "@/assets/icons/Image.svg";
import { ReactComponent as PollIcon } from "@/assets/icons/Poll.svg";
import { ReactComponent as ScheduleIcon } from "@/assets/icons/Schedule.svg";
import { ReactComponent as StickerIcon } from "@/assets/icons/Sticker.svg";
import Hairline from "@/components/Hairline";
import Modal from "../Modal";
import Button from "../Button";

class ComposeTweetSetting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyPermission: "Everyone",
    };
  }
  render() {
    return (
      <div className="tw-compose-tweet-fill-content--content-settings">
        <Modal
          trigger={
            <div className="tw-compose-tweet-fill-content--content-permission">
              <Icon icon={<WorldIcon />} size="1rem" />
              <span>{this.state.replyPermission} can Reply</span>
            </div>
          }
          cancel={
            <Button
              pill
              className="tw-compose-tweet-fill-content--content-permission-modal--cancel"
              size="lg"
            >
              Cancel
            </Button>
          }
        >
          <div className="tw-compose-tweet-fill-content--content-permission-modal">
            <div className="tw-compose-tweet-fill-content--content-permission-modal--header">
              <span className="title">Who can reply?</span>
              <span>
                Choose who can reply to this Tweet. Anyone mentioned can always
                reply.
              </span>
            </div>
            <div className="tw-compose-tweet-fill-content--content-permission-modal--options">
              <div className="tw-compose-tweet-fill-content--content-permission-modal--options-item">
                <Icon icon={<WorldLineIcon />} size="2rem"></Icon>
                <span>Everyone</span>
              </div>
              <div className="tw-compose-tweet-fill-content--content-permission-modal--options-item">
                <Icon icon={<PeopleFollowIcon />} size="2rem"></Icon>
                <span>People you follow</span>
              </div>
              <div className="tw-compose-tweet-fill-content--content-permission-modal--options-item">
                <Icon icon={<AtIcon />} size="2rem"></Icon>
                <span>Only people you mention</span>
              </div>
            </div>
          </div>
        </Modal>
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

export default ComposeTweetSetting;
