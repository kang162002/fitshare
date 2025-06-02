import logo from './logo.svg';
import './App.css';
import Board_all from './board/Board_all.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  // return <Board_all/>;

    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Board_all/>} />
        </Routes>
      </BrowserRouter>
    )
      
    
  
  // return (
  //   <div className="App">
  //     <p>프로젝트 시작</p>
  //     <p>develop branch 생성</p>
  //   </div>
  // );
}

export default App;
