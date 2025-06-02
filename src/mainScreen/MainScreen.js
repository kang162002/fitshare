// MainScreen.js
import React, { useEffect, useRef, useState } from "react";
import "./MainScreen.css";
import MainEffect from "../mainRipple/MainEffect";

// 비디오 소스 배열 정의
const videoSources = [
  "/media/main-media/main_Screen_media01.mp4",
  "/media/main-media/main_Screen_media02.mp4",
  "/media/main-media/main_Screen_media03.mp4",
];

function MainScreen() {
  const [ripples, setRipples] = useState([]); // 클릭 효과 저장
  const wrapperRef = useRef(null); // ripple 위치 계산용 ref
  const [query, setQuery]= useState(" ");
  const videoRefs = useRef([]);

  // 클릭 시 ripple 효과 위치 계산 및 추가


  const handleClick = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };


  useEffect(() => {
    let current = 0;

    // 비디오 순차 재생
    function playVideo(index) {
      const currentVideo = videoRefs.current[index];
      const nextIndex = (index + 1) % videoRefs.current.length;
      const nextVideo = videoRefs.current[nextIndex];
      if (!currentVideo || !nextVideo) return;

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

    playVideo(current); // 첫 비디오 시작
  }, []);

  // 검색 폼 제출 핸들러
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("검색어:", query);
    // TODO: 검색 실행 로직 추가
  };
  return (
    <div className="main_Screen_page_wrapper">
      {/* Ripple 배경 효과 */}
      <div
        ref={wrapperRef}
        onClick={handleClick}
        className="main_Screen_page_wrapper"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {ripples.map((r) => (
          <MainEffect key={r.id} x={r.x} y={r.y} />
        ))}

        {/* 배경 비디오 */}
        {videoSources.map((src, idx) => (
          <video
            key={idx}
            ref={(el) => (videoRefs.current[idx] = el)}
            className={`mainScreen_background_video ${
              idx === 0 ? "active" : ""
            }`}
            muted
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}

        {/* 네비게이션 바 */}
        <div className="mainScreen_main_menu">
          <div className="mainScreen_logo">
            <a href="#" className="mainScreen_main_logo_image">
              <img src="/images/mainImage/Fitlogo2.png" width="90" height="50" alt="Logo" />
            </a>
          </div>

          <nav className="mainScreen_menu_links">
            <a href="#">소개</a>

            {/* 운동 서브메뉴 */}
            <div className="mainScreen_menu_with_submenu">
              <a href="#">운동</a>
              <div className="mainScreen_main_submenu_container">
                <a href="#" className="main_submenu_item">
                  GYM
                </a>
                <a href="#" className="main_submenu_item">
                  홈트레이닝
                </a>
                <a href="#" className="main_submenu_item">
                  스트레칭
                </a>
                <a href="#" className="main_submenu_item">
                  다이어트
                </a>
              </div>
            </div>

            {/* 게시판 서브메뉴 */}
            <div className="mainScreen_menu_with_submenu">
              <a href="#">게시판</a>
              <div className="mainScreen_main_submenu_container">
                <a href="#" className="main_submenu_item">
                  전체게시판
                </a>
                <a href="#" className="main_submenu_item">
                  GYM게시판
                </a>
                <a href="#" className="main_submenu_item">
                  홈트레이닝 게시판
                </a>
                <a href="#" className="main_submenu_item">
                  스포츠동호회 게시판
                </a>
                <a href="#" className="main_submenu_item">
                  다이어트 게시판
                </a>
                <a href="#" className="main_submenu_item">
                  기타게시판
                </a>
              </div>
            </div>
          </nav>

          {/* 로그인 링크 */}
          <div className="mainScreen_top_nav">
            <a href="#">로그인</a>
          </div>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <main className="mainScreen_content">
          <div className="mainScreen_hero">
            <div className="mainScreen_content">
              {/* 검색 입력창 (엔터+버튼 가능) */}
              <form
                onSubmit={handleSearchSubmit}
                className="mainScreen_search_wrapper"
              >
                <div className="mainScreen_search_container">
                  <input
                    type="text"
                    placeholder="검색하세요"
                    spellCheck="false"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="mainScreen_search"
                  />
                  <button type="submit" className="mainScreen_search_button">
                    검색
                  </button>
                </div>
              </form>

              {/* 메인 문구 */}
              <h1>처음 운동하는 마음 BIOMIND</h1>
            </div>
          </div>
        </main>
      </div>

      {/* 푸터 */}
      <footer className="mainScreen_footer">
        <div className="mainScreen_footer_content">
          <span>
            회사 주소 : 충남 천안시 동남구 대흥로 215 7층, 8층 상담 번호:
            1566-9564
          </span>
          <a href="#">
            <span>고객센터</span>
          </a>
          <a href="#">
            <span>이용약관</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MainScreen;
