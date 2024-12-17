import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="wrap">
      <div>
        <img
          className="poster"
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.studych.co.kr%2Fbookch%2Fdata%2Fbook%2F2019%2F7%2F1%2F8809474873019%2F8809474873019.jpg&type=sc960_832"
          alt=""
        />
      </div>
      <div>
        <img
          className="poster"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjdfMjYx%2FMDAxNjM4MDIzNTEwMzUy.ioyRICULVjgob9mtPZQm6LM4FcCUQszsdVC0A58hr6Yg.QvdIBUcXW6hKUx2iD9lCSD88WE2DXZsfm_DtDE-1584g.JPEG.sgnam10%2FFB%25A3%25DFIMG%25A3%25DF1638023460874.jpg&type=sc960_832
"
          alt=""
        />
      </div>
      <div>
        <img
          className="poster"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MzBfMjc0%2FMDAxNDk4Nzk2NjEyNzU0.sO_JBUpcC0DooddVTgMpHoXjKsv8B3zdkkK46i_cGKkg.B9DGPs2i8_LbDvWDk4IRbGjQlywhbaR7GdUHxj87Llgg.JPEG.xman200%2Fspiderman_homecoming_ver14.jpg&type=sc960_832"
          alt=""
        />
      </div>
    </div>
  );
};

export default Poster;

// import React from "react";
// import "./Poster.css";
// const Poster = () => {
//   return (
//     <div className="poster">
//       Poster
//       <ul>
//         {imgs.map((img, i) => {
//           return (
//             <li>
//               <img src={""} alt="img2" />
//               <p>영화제목</p>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Poster;

// const PosterItem = () => {
//   return (
//     <li>
//       <img src={""} alt="img2" />
//       <p>영화제목</p>
//     </li>
//   );
// };
