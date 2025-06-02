import React from "react";
import "./MainEffect.css";

function MainEffect({x,y,id}) {
  
  
    return (
    <span
      key={id}
      className="mainScreen_ripple"
      style={{
        left: `${x - 20}px`,
        top: `${y - 20}px`,
        // animation: "rippleEffect 0.6s ease-out forwards",
      }}
    />
  );
}
export default MainEffect;
