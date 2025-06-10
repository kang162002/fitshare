import "./MainScreen.css";
import { Routes, Route, useRoutes, useNavigate}  from "react-router";
//import { useNavigate} from "react-router-dom";
import MainScreen from "./MainScreen";
import ErrorPage from "../errorPage/ErrorPage";
import Account from "../account/Account";
import Workout_stretch from "../workout/Workout_stretch";
import Workout_aero from "../workout/Workout_aero";
import Workout_gym from "../workout/Workout_gym";
import Board_all from "../board/Board_all";
import WritePage from "../board/WritePage";
import allPosts from "../board/Posts";
import { useState } from "react";

function Fitshare() {

    let navigate = useNavigate();
    const hnadleLogoclick =()=>{
        navigate("/")
    }

    const [posts, setPosts] = useState(allPosts.all);

  return (
    <div className="fitshare-nav">
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
            <a>운동</a>
            <div className="mainScreen-main-submenu-container">
              <a onClick={()=>{ navigate("/Workout_gym")}} className="main-submenu-item">
                근력운동
              </a>
              
                <a onClick={()=>{ navigate("/Workout_aero")}}className="main-submenu-item">
                유산소운동
              </a>
                <a onClick={()=>{ navigate("/Workout_stretch")}} className="main-submenu-item">
                스트레칭
              </a>
            </div>
          </div>

          {/* 게시판 서브메뉴 */}
          <div className="mainScreen-menu-with-submenu">
            <a onClick={()=>{ navigate("/Board_all")}}>게시판</a>
            <div className="mainScreen-main-submenu-container">
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
          <a onClick={()=>{ navigate("/Account")}} style={{cursor:"pointer"}}>로그인/회원가입</a>
        </div>
      </div>
    
      <Routes>
        <Route path="/" element={<MainScreen/>}></Route>
        <Route path="/MainScreen" element={<MainScreen />}></Route>
        <Route path="/Account" element={<Account />}></Route>
        <Route path="/Workout_aero" element={<Workout_aero />}></Route>
        <Route path="/Workout_stretch" element={<Workout_stretch />}></Route>
        <Route path="/Workout_gym" element={<Workout_gym />}></Route>
        <Route path="/Board_all" element={<Board_all posts={posts} setPosts={setPosts} />}></Route>
        <Route path="/Writepage" element={<WritePage posts={posts} setPosts={setPosts}/>}></Route>
        

        <Route
          path="*"
          element={
            <ErrorPage/>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Fitshare;
