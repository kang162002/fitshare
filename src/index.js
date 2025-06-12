import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));

//페이지 이동시 항상 페이지 상단으로 이동하는 함수
function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

root.render(
  <BrowserRouter>
    <ScrollTop />
    <App />
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
