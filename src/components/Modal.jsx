import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible ?? false,
    };

    this.modalRef = React.createRef();
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.triggeredModal = this.triggeredModal.bind(this);
    this.updateVisible = this.updateVisible.bind(this);
    this.setClass = this.setClass.bind(this);
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevProp.visible !== this.props.visible) {
      this.updateVisible(this.props.visible);
    }
    if (prevState.visible !== this.state.visible) {
      this.props.onChange(this.state.visible);
    }
    this.triggeredModal();
  }
  componentDidMount() {
    this.updateVisible(this.props.visible);
    this.triggeredModal();
  }

  updateVisible(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }

  triggeredModal() {
    this.setClass();
  }

  setClass() {
    if (this.state.visible) {
      this.modalRef.current.classList.add("active");
    } else {
      this.modalRef.current.classList.remove("active");
    }
  }

  show() {
    this.setState({
      visible: true,
    });
  }
  hide() {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div className="tw-modal" ref={this.modalRef}>
        <div className="tw-modal-trigger" onClick={this.show}>
          {this.props.trigger}
        </div>
        <div className="tw-modal-wrapper">
          <div className="tw-modal-cover"></div>
          <div className="tw-modal-container">
            <div className="tw-modal-body">{this.props.children}</div>
            <div className="tw-modal-footer">
              <div className="tw-modal-footer-cancel" onClick={this.hide}>
                {this.props.cancel}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  onChange: () => {},
};

export default Modal;
