import React from "react";
import "./Reason.css";
import { MdAccessTime } from "react-icons/md";

const Reason = () => {
  return (
    <div>
      <h3>가입해야 하는 또 다른 이유</h3>
      <ul>
        {/* {reasons.map((r,i)=> {
            return(
                <li key={i}>
                    <div>
                        <p>{r.desc}</p>
                        <MdAccessTime />
                    </div>
                </li>
            )
        })} */}
      </ul>
    </div>
  );
};

export default Reason;
