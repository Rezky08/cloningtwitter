import React from "react";

class DragToScroll extends React.Component {
  constructor(props) {
    super(props);
    const directions = ["x", "y", "all"];
    this.dragToScrollContainer = props.children?.ref ?? React.createRef();
    this.state = {
      direction: directions.includes(props.direction) ? props.direction : "all",
      directions: directions,
    };
    this.addDragScrollable = this.addDragScrollable.bind(this);
  }

  componentDidMount() {
    this.addDragScrollable();
  }

  addDragScrollable() {
    const slider = this.dragToScrollContainer.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;

      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          className: [
            "tw-drag-to-scroll",
            this.state !== "all" ? `scroll-${this.state.direction}` : null,
            this.props.children?.props?.className,
          ].join(" "),
          ref: this.props.children.ref ?? this.dragToScrollContainer,
        })}
      </div>
    );
  }
}

export default DragToScroll;
