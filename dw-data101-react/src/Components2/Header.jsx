import React from "react";
import "./Header.css";
import "./LButton.css";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <button>
          <img
            className="img"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDVfNyAg%2FMDAxNzI4MDg3Nzc5NjA2.xBBUJXitC_KaIsgu9QXvkY4ZKsvDyJmtnz8U4_ktsSUg.hQ6FNaCNM5o5fXYZLgHSjPZ5YaUUp_v5_kb2GYvDSaYg.JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5%25C6%25C4%25C0%25CF.jpg&type=sc960_832"
            alt=""
          />
        </button>
        <ul className="wrap">
          <li>
            <button className="mn1">한국어</button>
          </li>
          <li>
            <button className="mn2">로그인</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
