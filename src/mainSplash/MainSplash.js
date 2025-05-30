import React, { useEffect, useState } from "react";
import "../mainScreen/MainScreen.css";

function MainSplash({ onFinish = () => {} }) {
  const [showSplash, setShowSplash] = useState(true);

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // 2초 후 페이드아웃 시작
    }, 2000);

    const timer2 = setTimeout(() => {
      onFinish(); // 2.5초 후 Splash 종료
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <>
      {showSplash && (
        <div className={`mainScreen-Splash ${fadeOut ? "fade-out" : " "}`}>
          <h1>페이지로 이동중입니다....</h1>
        </div>
      )}
    </>
  );
}
export default MainSplash;
