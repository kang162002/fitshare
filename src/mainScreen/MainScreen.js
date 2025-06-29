// MainScreen.js
import { useEffect, useRef, useState } from "react";
import "./MainScreen.css";
import MainEffect from "../mainRipple/MainEffect";
import MainSplash from "../mainSplash/MainSplash";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

// 비디오 소스 배열 정의
const videoSources = [
  "/media/main-media/main_Screen_media01.mp4",
  "/media/main-media/main_Screen_media02.mp4",
  "/media/main-media/main_Screen_media03.mp4",
];

function MainScreen() {
  const [ripples, setRipples] = useState([]); // 클릭 효과 저장
  const wrapperRef = useRef(null); // ripple 위치 계산용 ref
  const [query, setQuery] = useState(" ");
  const videoRefs = useRef([]);
  let navigate = useNavigate();
  const introRef = useRef(null); // 소개 섹션 위치 참조
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scroll");

    if (scrollTo === "intro" && introRef.current) {
      introRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // 클릭 시 ripple 효과 위치 계산 및 추가 합니다
  const handleClick = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 950);
  };

  // 비디오 재생

  const [isSplashVisible, setIsSplashVisible] = useState(true);
  useEffect(() => {
    if (isSplashVisible) return;

    let current = 0;

    const playVideo = async (index) => {
      const currentVideo = videoRefs.current[index];
      const nextIndex = (index + 1) % videoRefs.current.length;
      const nextVideo = videoRefs.current[nextIndex];

      if (!currentVideo || !nextVideo) return;

      // 모든 비디오에서 active 제거
      videoRefs.current.forEach((video) => {
        if (video) video.classList.remove("active");
      });

      currentVideo.classList.add("active");
      currentVideo.currentTime = 0;

      try {
        await currentVideo.play();
      } catch (error) {
        console.error("비디오 재생 실패:", error);
        return;
      }

      currentVideo.onended = () => {
        playVideo(nextIndex);
      };
    };

    playVideo(current);
  }, [isSplashVisible]);

  // 검색 폼 제출 핸들러
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("검색어:", query);
    // TODO: 검색 실행 로직 추가
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };
  // 스플래시 타이머 시작
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1000); // 3초 후 스플래시 종료
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  // 스플래시 화면이 보이는 동안은 Splash만 렌더링
  if (isSplashVisible) {
    return <MainSplash />;
  }

  return (
    <div className="main-Screen-page-wrapper">
      {/* Ripple 배경 효과 */}
      <div
        ref={wrapperRef}
        onClick={handleClick}
        className="main-Screen-page-wrapper"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {ripples.map((r) => (
          <MainEffect key={r.id} x={r.x} y={r.y} />
        ))}

        {/* 배경 비디오 */}
        {videoSources.map((src, idx) => (
          <video
            key={idx}
            ref={(el) => {
              if (el) videoRefs.current[idx] = el;
            }}
            className={`mainScreen-background-video ${idx === 0 ? "active" : ""
              }`}
            muted
            playsInline={true}
            autoPlay
          >
            <source src={process.env.PUBLIC_URL +  src} type="video/mp4" />
          </video>
        ))}

        {/* 메인 콘텐츠 영역 */}

        <div className="mainScreen-content">
          <div className="mainScreen-hero">
            <div className="mainScreen-content">
              {/* 메인 문구 */}
              <h1>처음 운동하는 마음 BIOMIND</h1>
              {/* 검색 입력창 (엔터+버튼 가능) */}
              <form
                onSubmit={handleSearchSubmit}
                className="mainScreen-search-wrapper"
              >
                <div className="mainScreen-search-container">
                  <input
                    type="text"
                    placeholder="검색하세요.."
                    spellCheck="false"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="mainScreen-search"
                  />
                  <button type="submit" className="mainScreen-search-button">
                    검색
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mainScreen-intro-body">
        {/* 소개 */}
        <div ref={introRef} className="mainScreen-intro" id="abouttop">
          <div className="mainScreen-intro-image1">
            <img
              src={process.env.PUBLIC_URL +  "/images/mainIntroductionImage/introduction01.jpg"}
              alt=""
              width="800"
              height="500"
            />
          </div>
          <div className="mainScreen-intro-text01">
            <span className="mainScreen-intro-span">사이트 소개</span>
            <p className="mainSCreen-intro-p">
              BIOMIND는 ‘처음 운동하는 사람’을 위한 플랫폼입니다. 누구나 한 번쯤
              운동을 시작하지만, 꾸준히 이어가기란 쉽지 않습니다. BIOMIND는
              기술, 루틴 설계, 커뮤니티를 통해 당신의 건강한 습관이 자라날 수
              있도록 도와줍니다.
            </p>
          </div>
        </div>
        {/* 소개2 */}
        <div className="mainScreen-intro-section">
          <div className="mainScreen-intro-image2">
            <img
              src={process.env.PUBLIC_URL +  "/images/mainIntroductionImage/introduction02.jpg"}
              alt="운동 소개"
            />
          </div>
          <div className="mainScreen-intro-text02">
            <h2>운동의 습관</h2>
            <p>
              BIOMIND는 당신의 운동 습관을 만들어드립니다.
              <br />
              맞춤 콘텐츠와 커뮤니티로 함께 시작해보세요.
            </p>
          </div>
        </div>
        {/* 소개3 */}
        <div className="mainScreen-intro-section02">
          <div className="mainScreen-intro-box">
            <div className="mainScreen-intro-image3">
              <img
                src={process.env.PUBLIC_URL +  "/images/mainIntroductionImage/introduction03.jpg"}
                alt="운동 설명 1"
              />
            </div>
            <div className="mainScreen-intro-caption">나만의 루틴 만들기</div>
          </div>

          <div className="mainScreen-intro-box">
            <div className="mainScreen-intro-image3">
              <img
                src={process.env.PUBLIC_URL +  "/images/mainIntroductionImage/introduction04.jpg"}
                alt="운동 설명 2"
              />
            </div>
            <div className="mainScreen-intro-caption">운동 일지 기록하기</div>
          </div>
          <div className="mainScreen-intro-routine">
            <p className="mainScreen-intro-routine-text-p">
              처음 운동하는 사람도, 지속하지 못했던 사람도 BIOMIND에서는
              다릅니다. 우리는 운동을 습관으로 만들어드립니다.
            </p>
          </div>

          <div className="mainScreen-intro-temporary">
            <div className="mainScreen-image-group">
              <div className="image-item">
                <img
                  src={process.env.PUBLIC_URL +  "/images/mainIntroductionImage/introduction05.jpg"}
                  alt="소개1"
                />
              </div>
              <div className="image-item">
                <img
                  src={process.env.PUBLIC_URL +  "/images/mainIntroductionImage/introduction06.jpg"}
                  alt="소개2"
                />
              </div>
              <div className="image-item">
                <img
                  src={process.env.PUBLIC_URL +  "/images/mainIntroductionImage/introduction07.jpg"}
                  alt="소개3"
                />
              </div>
            </div>

            <div className="mainScreen-intro-text03">
              <h2>BIOMIND가 함께합니다</h2>
              <p>
                운동은 어렵지 않습니다. 시작이 반입니다.
                <br />
                바로 오늘, 여기서 시작하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
