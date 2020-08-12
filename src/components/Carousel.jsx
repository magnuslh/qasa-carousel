import React from "react";

import Button from "./Button.jsx";
import ArrowIcon from "./ArrowIcon";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.children.length * 1000, //avoid dealing with negative numbers
    };
  }

  componentDidMount() {}

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

  //Graveyard of broken dreams
  //   getChild = (position) => {
  //
  //     let { children } = this.props;
  //     let { index } = this.state;

  //     let truePosition = index + position; //6

  //     //let loopIter = Math.floor(index/5)//how many times have we looped the static divs
  //     let offset = position % children.length; //0
  //     let positionLoop = Math.floor(truePosition / 5); //1

  //     let childPosition = position + positionLoop * 5; //4+5=9

  //     childPosition = childPosition % children.length; //should return 2 //getValidIndex(childPosition, children.length-1)

  //     //childPosition = truePosition%children.length

  //     return children[childPosition];
  //   };

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
    console.log(index);

    let images = children.map((img, k) => {
      let i = Math.abs((index + k + 2) % children.length);
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
            <ArrowIcon dir="left"></ArrowIcon>
          </Button>
        </div>
        <div className="absolute w-20 z-50 right-0 mr-40">
          <Button onClick={() => this.handleNext()}>
            <ArrowIcon dir="right"></ArrowIcon>
          </Button>
        </div>
      </div>
    );
  }
}

export default Carousel;
