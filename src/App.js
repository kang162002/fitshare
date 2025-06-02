
import './App.css';
import MainScreen from './mainScreen/MainScreen';
import MainSplash from './mainSplash/MainSplash';
import { useState } from 'react';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  
   const [isSplashVisible, setIsSplashVisible] = useState(true);

  return(
    <>
    {showSplash ? (
        <MainSplash onFinish={() => setShowSplash(false)} />
      ) : (
        <MainScreen />
      )}

    
    </>
  )

  // return (
  //   <div className="App">
  //     <p>프로젝트 시작</p>
  //     <p>develop branch 생성</p>
  //   </div>
  // );
}

export default App;
