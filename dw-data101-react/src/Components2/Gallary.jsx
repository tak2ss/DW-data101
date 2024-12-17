import React from "react";
import "./Gallary.css";

const Gallary = () => {
  return (
    <div className="pic">
      <div>
        <img
          className="post"
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F31%2F43%2F77%2F314377aa955fe3f9bd05cdb03226f80b.jpg&type=sc960_832"
          alt=""
        />

        <p className="txt1">
          영화, 시리즈 등을 <div> 무제한으로</div>{" "}
        </p>
        <div className="txt2">
          5500원으로 시작하세요. 멤버십은 언제든지 해지가능합니다.
        </div>
      </div>
    </div>
  );
};

export default Gallary;
