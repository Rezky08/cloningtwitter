import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }
  show() {
    this.modalRef.current.classList.add("active");
  }
  hide() {
    this.modalRef.current.classList.remove("active");
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

export default Modal;
