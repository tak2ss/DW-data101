import React from "react";
import "./Header.css";
import "./LButton.css";

const Header = () => {
  return (
    <div>
      Header
      <div className="logo">
        <button>
          <img
            className="img"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MTBfMjc2%2FMDAxNzE3OTg2ODM4Mzk0.1qzWWfn5aBA1qCIOFzCx6O2J_4Omw8L9bwO391_P1X0g.oQSgE6ZwzHRNf_tbkPBoEUW-yKIAIuI13dJTC8PqCl0g.PNG%2Fnetflix-symbol-black.png&type=sc960_832"
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
