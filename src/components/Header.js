import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h2 className="logo">NEXT IT</h2>

        <nav className="nav">
          <a href="#home">HOME</a>
          <a href="#courses">교육과정</a>
          <a href="#footer">기관소개</a>
        </nav>
      </div>
    </header>
  );
}
