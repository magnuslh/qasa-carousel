import React from "react";

function Button(props) {
  return (
    <button
      className="
        focus:outline-none 
        opacity-25  
        bg-transparent 
        text-white
        hover:bg-gray-100 
        hover:text-gray-800 
        hover:opacity-50 
        rounded-full 
        transition-all 
        duration-300 
    "
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}

export default Button;
