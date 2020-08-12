import React from "react";

function Image(props) {
  let style = {
    height: "100%",
    maxHeight: "80vh",
    minHeight: "20vh",
    width: "auto",
  };
  return <img style={style} src={props.src} alt={props.alt}></img>;
}

export default Image;
