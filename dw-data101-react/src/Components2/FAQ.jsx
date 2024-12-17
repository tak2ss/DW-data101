import React from "react";
import "./FAQ.css";
import { AiOutlinePlus } from "react-icons/ai";

const qs = [
  "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  "넷플릭스란 무엇인가요?",
  "넷플릭스 요금은 얼마인가요?",
  "어디에서 시청할 수 있나요?",
  "멤버십을 해지하려면 어떻게 하나요?",
  "아이들이 넷플릭스를 봐도 좋을까요?",
];

const FAQ = () => {
  const me = {
    name: "tak",
    tel: "123123213",
  };

  return (
    <div className="faq">
      <h3>{me.name}</h3>

      <ul>
        {qs.map((q, i) => {
          return (
            <button key={i}>
              {q}
              <AiOutlinePlus />
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;

const nqs = [
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
    a: "Lorem",
  },
  {
    q: "넷플릭스란 무엇인가요?",
    a: "Lorem",
  },
  {
    q: "넷플릭스 요금은 얼마인가요?",
    a: "Lorem",
  },
  {
    q: "어디에서 시청할 수 있나요?",
    a: "Lorem",
  },
  {
    q: "멤버십을 해지하려면 어떻게 하나요?",
    a: "Lorem",
  },
  {
    q: "아이들이 넷플릭스를 봐도 좋을까요?",
    a: "Lorem",
  },
];

// const FAQ = () => {
//   return(
//     <div>
//       <h3>자주 묻는 질문</h3>

//     </div>
//   )
// }
