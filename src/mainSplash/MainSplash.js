import React, { useEffect, useState } from "react";
import "../mainScreen/MainScreen.css";

function MainSplash({ onFinish = () => {} }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeDuration = 850; // 페이드아웃 애니메이션 시간
    const visibleDuration = 1450; // 스플래시 노출 시간

    const timer1 = setTimeout(() => setFadeOut(true), visibleDuration); // 1초 뒤 페이드아웃
    const timer2 = setTimeout(onFinish, visibleDuration + fadeDuration); // 1.8초 뒤 종료

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`mainScreen-Splash${fadeOut ? " fade-out" : ""}`}>
      <h1 className="mainScreen-splash-text">
        Loading<span className="main-dots">...</span>
      </h1>
    </div>
  );
}

export default MainSplash;
