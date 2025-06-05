import React, { useEffect, useState } from "react";
import "../mainScreen/MainScreen.css";

function MainSplash({ onFinish = () => {} }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 900);
    const timer2 = setTimeout(onFinish, 950);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`mainScreen-Splash${fadeOut ? " fade-out" : ""}`}>
      <h1 className="mainScreen-splash-text">페이지로 이동중입니다<span className="main-dots">...</span></h1>
    </div>
  );
}

export default MainSplash;
