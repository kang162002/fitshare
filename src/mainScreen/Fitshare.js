import "./Fitshare.css";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import MainScreen from "./MainScreen";
import ErrorPage from "../errorPage/ErrorPage";
import Account from "../account/Account";
import Workout_stretch from "../workout/Workout_stretch";
import Workout_aero from "../workout/Workout_aero";
import Workout_gym from "../workout/Workout_gym";
import Board_all from "../board/Board_all";
import { Link } from "react-router";
import MainSearch from "./MainSearch";
import Customer from "./Customer";
import { useEffect, useState } from "react";
import AboutCompany from "../fitshareAbout/AboutCompany";
import Survey from "../account/Survey";
import accountDatas from "../account/data/accountDatas";
import MyProfile from "../account/MyProfile";
import WritePage from "../board/WritePage";
import allPosts from "../board/Posts";

function Fitshare() {
  let navigate = useNavigate();

  // ======= ✨✨😃✨✨ 모든 계정 정보 관리 ✨✨😃✨✨ ========
  const [accountData, setAccountData] = useState(accountDatas);

  // ======================== 설문조사 유저 받기(로그인 > 로그아웃 전환) ========================
  const [curAcct, setCurAcct] = useState(null);

  // ======================== 설문조사 모달창 ================================================
  const [openSurvey, setOpenSurvey] = useState(false);

  const [delayedShow, setDelayedShow] = useState(false);


  useEffect(() => {
    let timer;

    if (openSurvey) {

      timer = setTimeout(() => {
        setDelayedShow(true);
      }, 3000);
    } else {

      setDelayedShow(false);
    }

    return () => clearTimeout(timer);
  }, [openSurvey])



  const location = useLocation();

  const noLayoutPaths = ["/Customer"];
  const isLayoutVisible = !noLayoutPaths.includes(location.pathname);
  const [posts, setPosts] = useState(allPosts.all);

  return (
    <div className="fitshare-nav" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 네비게이션 바 */}
      {isLayoutVisible && (
        <div className="mainScreen-nav-fix">
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
                  src={process.env.PUBLIC_URL +  "/images/mainImage/Fitlogo2.png"}
                  width="90"
                  height="50"
                  alt="Logo"
                />
              </div>
            </div>

            <nav className="mainScreen-menu-links">
              <Link to="/MainScreen?scroll=intro">소개</Link>

              {/* 운동 서브메뉴 */}
              <div className="mainScreen-menu-with-submenu">
                <Link to="#">운동</Link>
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
            <div className="mainScreen-top-nav header-btn-login">
              {
                !curAcct && <Link
                  to="/Account"
                  style={{ cursor: "pointer" }}
                >
                  로그인/회원가입
                </Link>
              }
              {
                curAcct && <div className="header-user">
                  <div className="header-user-container">
                    <Link to="/MyProfile" className="header-user-account"><span>{curAcct.name} 님</span></Link>
                    <button
                      className="header-btn-logout mainScreen-menu-with-submenu"
                      onClick={() => {
                        navigate("/");
                        setCurAcct(null);
                      }}
                    >Logout</button>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<MainScreen />}></Route>
        <Route path="/MainScreen" element={<MainScreen />}></Route>
        <Route path="/Account" element={<Account setCurAcct={setCurAcct} setOpenSurvey={setOpenSurvey} accountData={accountData} setAccountData={setAccountData} />}></Route>
        <Route path="/Workout_aero" element={<Workout_aero curAcct={curAcct} setCurAcct={setCurAcct} accountData={accountData} setAccountData={setAccountData} />}></Route>
        <Route path="/Workout_stretch" element={<Workout_stretch curAcct={curAcct} setCurAcct={setCurAcct} accountData={accountData} setAccountData={setAccountData} />}></Route>
        <Route path="/Workout_gym" element={<Workout_gym curAcct={curAcct} setCurAcct={setCurAcct} accountData={accountData} setAccountData={setAccountData} />}></Route>

        <Route path="/search" element={<MainSearch curAcct={curAcct} setCurAcct={setCurAcct} accountData={accountData} setAccountData={setAccountData} />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/MyProfile" element={<MyProfile curAcct={curAcct} setCurAcct={setCurAcct} setOpenSurvey={setOpenSurvey} accountData={accountData} setAccountData={setAccountData} openSurvey={openSurvey} />} />
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/Board_all" element={<Board_all posts={posts} setPosts={setPosts} />}></Route>
        <Route path="/Writepage" element={<WritePage posts={posts} setPosts={setPosts} />}></Route>
        <Route path="/AboutCompany" element={<AboutCompany />}></Route>
      </Routes>

      {isLayoutVisible && (
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-links">
              <Link to="/AboutCompany">회사소개</Link>
              <a href={process.env.PUBLIC_URL +  "/files/Term_of_use.html"} target="_blank">
                이용약관
              </a>
              <a href={process.env.PUBLIC_URL +  "/files/Privacy_policy.html"} target="_blank">
                개인정보처리방침
              </a>
              <Link
                onClick={() => {
                  window.open(
                    process.env.PUBLIC_URL + "/Customer",
                    "CustomerPopup",
                    "width=800,height=600"
                  );
                }}
              >
                고객센터
              </Link>
            </div>
            <div className="footer-social">
              <a href="https://instagram.com/biomind">Instagram</a>
              <a href="https://youtube.com/biomind">YouTube</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 BIOMIND Inc. | 사업자번호: 123-45-67890 | 대표: 김동욱</p>
            <p>
              주소: 충남 천안시 동남구 대흥로 215 7층 | 이메일: info@biomind.kr
            </p>
          </div>
        </footer>
      )}

      {delayedShow ? <Survey curAcct={curAcct} setCurAcct={setCurAcct} setOpenSurvey={setOpenSurvey} accountData={accountData} setAccountData={setAccountData} /> : null}

    </div>
  );
}

export default Fitshare;
