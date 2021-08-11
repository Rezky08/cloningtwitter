import React from "react";
import Icon from "@/components/Icon";
import { ReactComponent as WorldLineIcon } from "@/assets/icons/lines/World.svg";
import { ReactComponent as AtIcon } from "@/assets/icons/At.svg";
import { ReactComponent as PeopleFollowIcon } from "@/assets/icons/PeopleFollow.svg";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

class TweetModalVisibilityOptionItem extends React.Component {
  constructor(props) {
    super(props);
    this.selected = this.selected.bind(this);
  }

  selected() {
    this.props.onClick(this.props.title);
  }

  render() {
    return (
      <div
        onClick={this.selected}
        className="tw-tweet-modal-visibility--options-item"
      >
        <Icon icon={this.props.icon} size="2rem"></Icon>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

class TweetModalVisibility extends React.Component {
  constructor(props) {
    super(props);

    const visibilityOptions = [
      {
        icon: <WorldLineIcon />,
        title: "Everyone",
      },
      {
        icon: <PeopleFollowIcon />,
        title: "People you follow",
      },
      {
        icon: <AtIcon />,
        title: "People you mention",
      },
    ];

    this.state = {
      visible: false,
      visibility: this.props.visibility ?? "Everyone",
      visibilityOptions,
    };

    this.selected = this.selected.bind(this);
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  componentDidMount() {
    this.selected(this.state.visibility);
  }

  selected(value) {
    this.props.onChange(value);
    this.props.onSelected(value);
    this.props.onInput(value);
    this.setState({ visible: false });
  }

  onVisibilityChange(value) {
    this.setState({ visible: value ?? this.state });
  }

  render() {
    return (
      <div className="tw-tweet-modal-visibility">
        <Modal
          visible={this.state.visible}
          trigger={this.props.trigger}
          onChange={this.onVisibilityChange}
          cancel={
            <Button
              pill
              className="tw-tweet-modal-visibility--cancel"
              size="lg"
            >
              Cancel
            </Button>
          }
        >
          <div className="tw-tweet-modal-visibility--body">
            <div className="tw-tweet-modal-visibility--header">
              <span className="title">Who can reply?</span>
              <span>
                Choose who can reply to this Tweet. Anyone mentioned can always
                reply.
              </span>
            </div>
            <div className="tw-tweet-modal-visibility--options">
              {this.state.visibilityOptions.map((item, index) => {
                return (
                  <TweetModalVisibilityOptionItem
                    onClick={this.selected}
                    key={index}
                    {...item}
                  />
                );
              })}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

TweetModalVisibilityOptionItem.defaultProps = {
  title: "",
  onClick: () => {},
  icon: null,
};

TweetModalVisibility.defaultProps = {
  onChange: () => {},
  onSelected: () => {},
  onInput: () => {},
};

export default TweetModalVisibility;
