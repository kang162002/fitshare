import "./App.css";
import ErrorPage from "./errorPage/ErrorPage";
import Fitshare from "./mainScreen/Fitshare";

import MainScreen from "./mainScreen/MainScreen";
import MainSplash from "./mainSplash/MainSplash";
import { useState } from "react";
import { BrowserRouter } from "react-router";

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return(
  
    <Fitshare/>
    

  )

  // return <MainScreen/>;
  // return<ErrorPage/>

  // return (
  //   <div className="App">
  //     <p>프로젝트 시작</p>
  //     <p>develop branch 생성</p>
  //   </div>
  // );
}

export default App;
