import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.ButtonRef = React.createRef();
    this.addClassName = this.addClassName.bind(this);
    this.addCircleClass = this.addCircleClass.bind(this);
    this.addPillClass = this.addPillClass.bind(this);
    this.setDisabledAttribute = this.setDisabledAttribute.bind(this);
    this.onClicked = this.onClicked.bind(this);
    this.addSizeClass = this.addSizeClass.bind(this);
  }

  componentDidUpdate(prevProps) {
    this.addClassName();
    this.setDisabledAttribute();
  }

  componentDidMount() {
    this.addClassName();
    this.setDisabledAttribute();
  }

  setDisabledAttribute() {
    if (this.props.disabled) {
      this.ButtonRef.current?.setAttribute("disabled", this.props.disabled);
    } else {
      this.ButtonRef.current?.removeAttribute("disabled");
    }
  }

  addClassName() {
    this.ButtonRef?.current?.setAttribute("class", "");
    this.ButtonRef?.current?.classList?.add("tw-button");
    if (this.props.className) {
      this.ButtonRef?.current?.classList?.add(
        ...this.props?.className
          ?.split(" ")
          .filter((className) => className !== "")
      );
    }
    this.addCircleClass();
    this.addPillClass();
    this.addSizeClass();
  }

  addPillClass() {
    if (this.props.pill) {
      this.ButtonRef.current.classList.add("tw-button-pill");
    }
  }

  addSizeClass() {
    if (this.props.size) {
      this.ButtonRef.current.classList.add(this.props.size);
    }
  }

  addCircleClass() {
    if (this.props.circle) {
      this.ButtonRef.current.classList.add("tw-button-circle");
    }
  }

  onClicked() {
    if (!this.ButtonRef.current.getAttribute("disabled")) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <button ref={this.ButtonRef} onClick={this.onClicked}>
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  onClick: () => {},
};
export default Button;
