import { useEffect, useState } from "react";
import "../mainScreen/MainScreen.css";

function MainSplash({ onFinish = () => { } }) {
  // 서서히 사라지는 효과 Boolean
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
      <h1 className="mainScreen-splash-text">
        <img
          src={process.env.PUBLIC_URL +  "/images/mainImage/Fitlogo2.png"}
          width="470"
          height="400"
        />
      </h1>
    </div>
  );
}

export default MainSplash;
