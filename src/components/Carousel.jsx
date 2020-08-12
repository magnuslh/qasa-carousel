import React from "react";

import Button from "./Button";
import ChevronIcon from "./ChevronIcon";

const mod = (x, m) => {
  //"reverse" mod for negative numbers
  return ((x % m) + m) % m;
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handlePrev = () => {
    let newIndex = this.state.index + 1;
    this.setState({
      index: newIndex,
    });
  };

  handleNext = () => {
    let newIndex = this.state.index - 1;
    this.setState({
      index: newIndex,
    });
  };

  getStyle = (k) => {
    let styleArray = [
      {
        //leftHidden
        display: "block",
        transform: "translate3d(-450px, 0, 0 ) scale(0.2)",
        opacity: 0,
        zIndex: 0,
      },
      {
        //left
        transform: "translate3d(-400px, 0, 0 ) scale(0.5)",
        opacity: 0.3,
        zIndex: 10,
      },
      {
        //middle
        transform: "translate3d(0px, 0, 0 ) scale(1)",
        zIndex: 20,
      },
      {
        //right
        transform: "translate3d(400px, 0, 0 ) scale(0.5)",
        opacity: 0.3,
        zIndex: 10,
      },
      {
        //rightHidden
        display: "block",
        transform: "translate3d(450px, 0, 0 ) scale(0.2)",
        opacity: 0,
        zIndex: 0,
      },
    ];
    if (styleArray[k]) {
      return styleArray[k];
    } else {
      return {
        //hidden
        display: "none",
      };
    }
  };

  render() {
    let { children } = this.props;
    let { index } = this.state;
    let images = children.map((img, k) => {
      let i = mod(index + k + 2, children.length);
      return (
        <div
          key={k}
          className="absolute transition-all duration-500"
          style={this.getStyle(i)}
        >
          {img}
        </div>
      );
    });

    return (
      <div className="relative overflow-hidden w-full h-full flex justify-center items-center">
        {images}
        <div className="absolute w-20 z-50 left-0 ml-40">
          <Button onClick={() => this.handlePrev()}>
            <ChevronIcon dir="left"></ChevronIcon>
          </Button>
        </div>
        <div className="absolute w-20 z-50 right-0 mr-40">
          <Button onClick={() => this.handleNext()}>
            <ChevronIcon dir="right"></ChevronIcon>
          </Button>
        </div>
      </div>
    );
  }
}

export default Carousel;
