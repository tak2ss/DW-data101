import React from "react";
import "./Sampleheader.css";

const Sampleheader = () => {
  return (
    <div>
      Sampleheader
      <div className="wrap">
        <button>
          <img
            class="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23lYXAdOYfakGz59FyUHfnAjkcMGtXIof6Q&s"
            alt="img"
          />
          logo
        </button>
        <ul>
          <li>
            <button className="hb">lang</button>
          </li>
          <li>
            <button className="hb">login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sampleheader;
