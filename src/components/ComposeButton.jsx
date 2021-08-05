import React from "react";
import { ReactComponent as ComposeIcon } from "@/assets/icons/Compose.svg";
import Button from "@/components/Button";
import Icon from "./Icon";

class ComposeButton extends React.Component {
  constructor(props) {
    super(props);
    this.ComposeButtonRef = React.createRef();
    this.addClickedEvent = this.addClickedEvent.bind(this);
  }

  componentDidMount() {
    this.addClickedEvent();
  }

  addClickedEvent() {
    const composeButtonNode = this.ComposeButtonRef.current?.ButtonRef?.current;
    composeButtonNode.addEventListener("mousedown", (e) => {
      composeButtonNode.classList.add("active");
    });
    composeButtonNode.addEventListener("mouseup", (e) => {
      composeButtonNode.classList.remove("active");
    });
  }

  render() {
    return (
      <Button className="tw-compose-button" ref={this.ComposeButtonRef}>
        <Icon icon={<ComposeIcon />} />
      </Button>
    );
  }
}

export default ComposeButton;
