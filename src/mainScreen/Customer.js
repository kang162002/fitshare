// React에서 상태를 사용하기 위해 useState 훅 import
import { useState } from "react";
import "./Customer.css"; // 고객센터 전용 스타일

// 고객센터 컴포넌트 정의
function Customer() {
  // 컴포넌트 열림 여부를 나타내는 상태 정의 (true: 열림, false: 닫힘)
  const [isOpen, setIsOpen] = useState(true);

  // 만약 닫힌 상태라면, 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  return (
    <div className="customer-center">
      {/* 전체 고객센터 박스 컨테이너 */}
      {/* 고객센터 메인 제목 */}
      <h1>고객센터</h1>
      {/* 자주 묻는 질문 섹션 */}
      <section className="faq">
        <h2>자주 묻는 질문</h2>
        <ul>
          <li>
            <strong>Q.</strong> 비밀번호를 잊어버렸어요.
          </li>
          <li>
            <strong>A.</strong> 로그인 화면의 '비밀번호 찾기'를 눌러주세요.
          </li>
        </ul>
      </section>
      {/* 문의 폼 섹션 */}
      <section className="contact-form">
        <h2>문의하기</h2>
        <form>
          <input type="text" placeholder="이름" required />
          <input type="email" placeholder="이메일" required />
          <textarea placeholder="문의 내용" required />
          <button type="submit">문의 보내기</button>
        </form>
      </section>
      {/* 고객센터 연락처 섹션 */}
      <section className="contact-info">
        <h2>고객센터 연락처</h2>
        <p>1588-0000</p>
        <p>help@yourservice.com</p>
      </section>
    </div>
  );
}

// export를 통해 다른 컴포넌트에서 사용 가능하게 함
export default Customer;
