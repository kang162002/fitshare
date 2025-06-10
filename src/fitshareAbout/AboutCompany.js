// src/pages/AboutCompany.js
import React from "react";
import "./AboutCompany.css";

function AboutCompany() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>당신의 운동 습관, BIOMIND가 함께합니다</h1>
        <p>처음 운동하는 사람도 쉽게 시작할 수 있도록 돕는 플랫폼</p>
      </section>

      <section className="about-section">
        <h2>회사 개요</h2>
        <ul>
          <li>
            <strong>회사명:</strong> BIOMIND Inc.
          </li>
          <li>
            <strong>설립:</strong> 2025년
          </li>
          <li>
            <strong>위치:</strong> 충남 천안시 동남구 대흥로 215
          </li>
          <li>
            <strong>주요 서비스:</strong> 운동 콘텐츠, 루틴 기록, 커뮤니티
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>핵심 가치</h2>
        <div className="about-values">
          <div className="value-box">
            <h3>💪 쉽게 시작</h3>
            <p>초보자도 무리 없이 따라할 수 있는 콘텐츠 제공</p>
          </div>
          <div className="value-box">
            <h3>🤝 함께 성장</h3>
            <p>사용자 커뮤니티를 통해 응원과 팁을 나눕니다</p>
          </div>
          <div className="value-box">
            <h3>📈 지속 가능한 팁</h3>
            <p>자신만의 루틴을 만들고 기록할 수 있도록 서포트</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>연혁</h2>
        <ul className="about-timeline">
          <li>
            <strong>2024.11</strong> - 서비스 기획 시작
          </li>
          <li>
            <strong>2025.01</strong> - 프로토타입 완성
          </li>
          <li>
            <strong>2025.05</strong> - 공식 서비스 런칭
          </li>
        </ul>
      </section>

      {/* 💡 팀원 소개 */}
      <section className="about-section">
        <h2>우리 팀</h2>
        <div className="team-section">
          {[
            { name: "김바이오", role: "대표 / PM", image: "/images/team1.jpg" },
            {
              name: "이프론트",
              role: "프론트엔드 개발자",
              image: "/images/team2.jpg",
            },
            {
              name: "박백엔드",
              role: "백엔드 개발자",
              image: "/images/team3.jpg",
            },
            {
              name: "최디자인",
              role: "UX/UI 디자이너",
              image: "/images/team4.jpg",
            },
          ].map((member) => (
            <div className="team-card" key={member.name}>
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎬 유튜브 영상 삽입 */}
      <section className="about-section">
        <h2>서비스 소개 영상</h2>
        <div className="youtube-wrapper">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="BIOMIND 소개 영상"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>

      {/* 🎯 비전 다이어그램 (SVG or 일러스트) */}
      <section className="about-section">
        <h2>BIOMIND의 비전</h2>
        <div className="vision-diagram">
          <img
            src="/images/mainImage/Aboutdiagram.png"
            alt="BIOMIND 비전 다이어그램"
          />
          <p>
            운동을 일상으로, 기술로 더 건강하게. <br />
            BIOMIND는 생활 속 운동 문화를 만들어 갑니다.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>연락처</h2>
        <p>
          <strong>이메일:</strong> info@biomind.kr
        </p>
        <p>
          <strong>인스타그램:</strong> @biomind
        </p>
        <p>
          <strong>YouTube:</strong> youtube.com/biomind
        </p>
      </section>
    </div>
  );
}

export default AboutCompany;
