import '../errorPage/ErrorPage.css';
import { Link } from "react-router";



function ErrorPage() {
  return (
    <div className="error-page">
      
      <h1 className="error-glitch" data-text="404">404</h1>
      <h2 className="error-subtitle" data-text="죄송합니다.페이지를 찾을 수 없습니다.">
        죄송합니다. 페이지를 찾을 수 없습니다.</h2>
      <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.<br></br>
            입력하신 주소가 정확한지 다시 한 번 확인해주세요.</p>
      <Link to="/" className="error-btn error-link">메인으로 돌아가기</Link>
  
    </div>

    
  );
}

export default ErrorPage;