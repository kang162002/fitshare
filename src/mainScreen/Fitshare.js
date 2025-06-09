import "./MainScreen.css";
import { Routes, Route, useRoutes, useNavigate } from "react-router";
//import { useNavigate} from "react-router-dom";
import MainScreen from "./MainScreen";
import ErrorPage from "../errorPage/ErrorPage";
import Account from "../account/Account";
import Workout_stretch from "../workout/Workout_stretch";
import Workout_aero from "../workout/Workout_aero";
import Workout_gym from "../workout/Workout_gym";
import Board_all from "../board/Board_all";
import { Link } from "react-router";
import MainSearch from "./MainSearch";

function Fitshare() {
  let navigate = useNavigate();
  const hnadleLogoclick = () => {
    navigate("/");
  };

  return (
    <div className="fitshare-nav">
      <div className="mainScreen-nav-fix">
        {/* 네비게이션 바 */}
        <div className="mainScreen-main-menu">
          <div className="mainScreen-logo">
            <div
              onClick={() => {
                navigate("/MainScreen");
              }}
              style={{ cursor: "pointer" }}
              className="mainScreen-main-logo-image"
            >
              <img
                src="/images/mainImage/Fitlogo2.png"
                width="90"
                height="50"
                alt="Logo"
              />
            </div>
          </div>

          <nav className="mainScreen-menu-links">
            <Link to="/">소개</Link>

            {/* 운동 서브메뉴 */}
            <div className="mainScreen-menu-with-submenu">
              <Link to="/">운동</Link>
              <div className="mainScreen-main-submenu-container">
                <Link to="/Workout_gym" className="main-submenu-item">
                  근력운동
                </Link>

                <Link to="/Workout_aero" className="main-submenu-item">
                  유산소운동
                </Link>
                <Link to="/Workout_stretch" className="main-submenu-item">
                  스트레칭
                </Link>
              </div>
            </div>

            {/* 게시판 서브메뉴 */}
            <div className="mainScreen-menu-with-submenu">
              <Link
                to="/Board_all"
              >
                게시판
              </Link>
            </div>
          </nav>

          {/* 로그인 링크 */}
          <div className="mainScreen-top-nav">
            <Link
              to="/Account"
              style={{ cursor: "pointer" }}
            >
              로그인/회원가입
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MainScreen />}></Route>
        <Route path="/MainScreen" element={<MainScreen />}></Route>
        <Route path="/Account" element={<Account />}></Route>
        <Route path="/Workout_aero" element={<Workout_aero />}></Route>
        <Route path="/Workout_stretch" element={<Workout_stretch />}></Route>
        <Route path="/Workout_gym" element={<Workout_gym />}></Route>
        <Route path="/Board_all" element={<Board_all />}></Route>
        <Route path="/search" element={<MainSearch />} />

        <Route
          path="*"
          element={
            <ErrorPage />
          }
        ></Route>
      </Routes>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-links">
            <a href="/about">회사소개</a>
            <a href="/files/Term_of_use.html" target="_blank">이용약관</a>
            <a href="/files/Privacy_policy.html" target="_blank">개인정보처리방침</a>
            <a href="/support">고객센터</a>
          </div>
          <div className="footer-social">
            <a href="https://instagram.com/biomind">Instagram</a>
            <a href="https://youtube.com/biomind">YouTube</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 BIOMIND Inc. | 사업자번호: 123-45-67890 | 대표: 김바이오</p>
          <p>
            주소: 충남 천안시 동남구 대흥로 215 7층 | 이메일: info@biomind.kr
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Fitshare;
