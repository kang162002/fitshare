import React, { useEffect } from "react";
import "./MainScreen.css";

function MainScreen() {
  useEffect(() => {
    const videoList = [
      {
        element: document.getElementById("video1"),
      },
      {
        element: document.getElementById("video2"),
      },
      {
        element: document.getElementById("video3"),
      },
    ];

    let current = 0;

    function playVideo(index) {
      const currentVideo = videoList[index].element;
      const nextIndex = (index + 1) % videoList.length;
      const nextVideo = videoList[nextIndex].element;

      nextVideo.classList.remove("active");
      nextVideo.currentTime = 0;

      currentVideo.classList.add("active");
      currentVideo.play();

      currentVideo.onended = () => {
        currentVideo.classList.remove("active");
        nextVideo.classList.add("active");
        nextVideo.play();
        playVideo(nextIndex);
      };
    }

    playVideo(current);
  }, []);

  return (
    <div className="main-Screen-page-wrapper">
      {/* 비디오 배경 */}
      <video
        id="video1"
        className="bio-background-video active"
        muted
        playsInline
      >
        <source
          src="/media/main-media/main_Screen_media01.mp4"
          type="video/mp4"
        />
      </video>
      <video id="video2" className="bio-background-video" muted playsInline>
        <source
          src="/media/main-media/main_Screen_media02.mp4"
          type="video/mp4"
        />
      </video>
      <video id="video3" className="bio-background-video" muted playsInline>
        <source
          src="/media/main-media/main_Screen_media03.mp4"
          type="video/mp4"
        />
      </video>

      {/* 네비게이션 */}
      <div className="bio-main-menu">
        <div className="bio-left-nav">
          <div className="bio-logo">
            <a href="#" className="bio-main-logo-image">
              <img
                src="/images/mainImage/fitShare_logo.png"
                width="90"
                height="50"
                alt="Logo"
              />
            </a>
          </div>
          <nav className="bio-menu-links">
            <a href="#">소개</a>
            <a href="#">운동</a>
            <a href="#">게시판</a>
          </nav>
        </div>
        <div className="bio-search-box"></div>
      </div>
      <div className="bio-top-nav">
        <a href="#">로그인</a>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="mainScreen-content">
        <div className="bio-hero">
          <div className="bio-content">
            <div className="bio-search-wrapper">
              <input
                type="text"
                placeholder=" "
                spellCheck="false"
                className="bio-search"
                style={{
                  backgroundImage: "url('/images/reading.png')",
                  backgroundSize: "cover",
                  width: "500px",
                  height: "100px",
                  fontSize: "5rem",
                  border: "none",
                  borderRadius: "20px",
                  padding: "0 10px",
                  outline: "none",
                  color: "white",
                }}
              />
            </div>
            <h1>처음 운동하는 마음 BIOMIND</h1>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="mainScreen-footer">
        <span>회사 주소 : </span>
        <br />
        <a href="#">
          <span>고객센터</span>
        </a>
        <br />
        <a href="#">
          <span>이용약관</span>
        </a>
      </footer>
    </div>
  );
}

export default MainScreen;
