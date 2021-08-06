import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.ButtonRef = React.createRef();
    this.addClassName = this.addClassName.bind(this);
    this.addCircleClass = this.addCircleClass.bind(this);
    this.addPillClass = this.addPillClass.bind(this);
  }

  componentDidMount() {
    this.addClassName();
  }

  addClassName() {
    if (this.props.className) {
      this.ButtonRef.current.classList.add(this.props.className);
    }
    this.addCircleClass();
    this.addPillClass();
  }

  addPillClass() {
    if (this.props.pill) {
      this.ButtonRef.current.classList.add("tw-button-pill");
    }
  }

  addCircleClass() {
    if (this.props.circle) {
      this.ButtonRef.current.classList.add("tw-button-circle");
    }
  }

  render() {
    return (
      <button ref={this.ButtonRef} className="tw-button">
        {this.props.children}
      </button>
    );
  }
}
export default Button;
