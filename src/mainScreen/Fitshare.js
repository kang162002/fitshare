import "./MainScreen.css";
import { Routes, Route, useRoutes }  from "react-router";
import { useNavigate} from "react-router-dom";
import MainScreen from "./MainScreen";
import ErrorPage from "../errorPage/ErrorPage";

function Fitshare() {

    let navigate = useNavigate();
    const hnadleLogoclick =()=>{
        navigate("/")
    }

  return (
    <>
      {/* 네비게이션 바 */}
      <div className="mainScreen-main-menu">
        <div className="mainScreen-logo">
          <div onClick={()=>{ navigate("/MainScreen")}} style={{cursor:"pointer"}}  className="mainScreen-main-logo-image">
            <img
              src="/images/mainImage/Fitlogo2.png"
              width="90"
              height="50"
              alt="Logo"
            />
          </div>
        </div>

        <nav className="mainScreen-menu-links">
          <a href="/">소개</a>

          {/* 운동 서브메뉴 */}
          <div className="mainScreen-menu-with-submenu">
            <a href="/">운동</a>
            <div className="mainScreen-main-submenu-container">
              <a href="/" className="main-submenu-item">
                근력운동
              </a>
              <a href="/" className="main-submenu-item">
                유산소운동
              </a>
              <a href="/" className="main-submenu-item">
                스트레칭
              </a>
            </div>
          </div>

          {/* 게시판 서브메뉴 */}
          <div className="mainScreen-menu-with-submenu">
            <a href="/">게시판</a>
            <div className="mainScreen-main-submenu-container">
              <a href="/" className="main-submenu-item">
                전체게시판
              </a>
              <a href="/" className="main-submenu-item">
                GYM게시판
              </a>
              <a href="/" className="main-submenu-item">
                홈트레이닝 게시판
              </a>
              <a href="/" className="main-submenu-item">
                스포츠동호회 게시판
              </a>
              <a href="/" className="main-submenu-item">
                다이어트 게시판
              </a>
              <a href="/" className="main-submenu-item">
                기타게시판
              </a>
            </div>
          </div>
        </nav>

        {/* 로그인 링크 */}
        <div className="mainScreen-top-nav">
          <a href="/">로그인/회원가입</a>
        </div>
      </div>
    
      <Routes>
        <Route path="/" element={<MainScreen/>}></Route>
        <Route path="/MainScreen" element={<MainScreen />}></Route>

        <Route
          path="*"
          element={
            <ErrorPage/>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default Fitshare;
