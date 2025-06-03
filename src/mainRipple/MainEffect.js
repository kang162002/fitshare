import React from "react";
import "./MainEffect.css";

function MainEffect({x,y,id}) {
  
  
    return (
    <span
      key={id}
      className="ripple"
      style={{
        left: `${x - 5}px`,
        top: `${y - 5}px`,
        // animation: "rippleEffect 0.6s ease-out forwards",
      }}
    />
  );
}
export default MainEffect;
