import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App" id="home">
      <Header />

      <main className="main">
        <section className="intro">
          <h1>새로운 개발의 시작</h1>
          <p>AI 시대를 이끌어갈 새로운 코딩 교육을 만나보세요.</p>
        </section>

        <section className="courses" id="courses">
          {/* 바이브 코딩 */}
          <div className="course-card">
            <div className="course-image">
              <img src="/images/vibe.jpg" alt="바이브 코딩" />
            </div>

            <div className="course-info">
              <div className="course-badges">
                <span>서울</span>
                <span>모집중</span>
              </div>

              <h2>바이브 코딩 과정</h2>

              <p>
                AI 도구를 활용하여 아이디어를 실제 서비스로 구현하는 새로운 코딩
                교육 과정입니다.
              </p>

              <div className="course-detail">
                <p>
                  <strong>모집기간</strong> 매월 개강
                </p>
                <p>
                  <strong>모집인원</strong> 30명
                </p>
              </div>

              <button className="detail-button">자세히 보기</button>
            </div>
          </div>

          {/* AI 코딩 */}
          <div className="course-card">
            <div className="course-image">
              <img src="/images/ai.jpg" alt="AI 코딩" />
            </div>

            <div className="course-info">
              <div className="course-badges">
                <span>서울</span>
                <span>모집중</span>
              </div>

              <h2>AI 코딩 과정</h2>

              <p>
                인공지능 기술과 프로그래밍을 접목하여 실무 중심의 개발 능력을
                배우는 과정입니다.
              </p>

              <div className="course-detail">
                <p>
                  <strong>모집기간</strong> 매월 개강
                </p>
                <p>
                  <strong>모집인원</strong> 30명
                </p>
              </div>

              <button className="detail-button">자세히 보기</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
