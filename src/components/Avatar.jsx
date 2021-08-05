import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.avatarRef = React.createRef();
    this.addSizeClassName = this.addSizeClassName.bind(this);
  }
  componentDidMount() {
    this.addSizeClassName();
  }
  addSizeClassName() {
    const availableSize = ["sm", "lg"];
    const sizeClassName = Object.keys(this.props).filter((o) =>
      availableSize.includes(o)
    );
    this.avatarRef.current.classList.add(...sizeClassName);
  }

  render() {
    return (
      <div className="tw-avatar" ref={this.avatarRef}>
        {this.props.children}
      </div>
    );
  }
}

export default Avatar;
