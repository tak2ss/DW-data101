import React from "react";
import "./LButton.css";

const LButton = () => {
  return (
    <div>
      <ul>
        <li>
          <button className="lbt">left</button>
        </li>
        <li>
          <button className="rbt">right</button>
        </li>
      </ul>
    </div>
  );
};

export default LButton;
