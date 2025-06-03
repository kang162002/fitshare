import './App.css';
import ErrorPage from './errorPage/ErrorPage';


import MainScreen from './mainScreen/MainScreen';
import MainSplash from './mainSplash/MainSplash';
import { useState } from 'react';




function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  // return(
  //   <>
  //     {isSplashVisible ? (
  //       <MainSplash onFinish={() => setIsSplashVisible(false)} />
  //     ) : (
  //       <MainScreen />
  //     )}

 
  //   </>
  // )
  return<ErrorPage/>


  // return (
  //   <div className="App">
  //     <p>프로젝트 시작</p>
  //     <p>develop branch 생성</p>
  //   </div>
  // );
}

export default App;
