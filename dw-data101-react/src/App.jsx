// import React from "react";
// import Footer from "./layout/Footer";
// import Header from "./layout/Header";
// import Gallery from "./components/Gallery";
// import Auth from "./components/Auth";
// import Input from "./components/input";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <main>
//         <Gallery />
//         <Auth />
//         <Input />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default App;
//
//
//
//

// import React from "react";
// import Sampleheader from "./layout/Sampleheader";
// import Samplegal from "./Components1/Samplegal";
// import Ninput from "./Components1/Ninput";
// import Sinput from "./Components1/Sinput";
// import Cal from "./ex/Cal";
// import Detail from "./Components1/Detail";

// const App = () => {
//   const name = "tak";
//   /const ->변함없이 계속해서 끝까지/;

//   // function add(n1, n2) {
//   //   return n1 + n2;
//   // }

//   return (
//     <>
//       <Sampleheader />
//       <main>
//         <Samplegal />
//         <Ninput />
//         <Detail />
//         <Sinput />
//         <h1>{name}</h1>
//         {/* <MQ /> */}
//         {/* <Cal /> */}
//       </main>
//     </>
//   );
// };

// export default App;
//
//
//
//
//

import React from "react";
import Header from "./Components2/Header";
import Calendar from "./Components2/Calendar";
import Detail from "./Components2/Detail";
import Gallary from "./Components2/Gallary";
import Hinput from "./Components2/Hinput";
import LButton from "./Components2/LButton";
import Poster from "./Components2/Poster";
import Reason from "./Components2/Reason";
import FAQ from "./Components2/FAQ";
import LB from "./Components2/LB";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Gallary />
        <Calendar />
        <Detail />
        <Hinput />
        <LButton />
        <Poster />
        <Reason />
        <FAQ />
        <LB />
      </main>
    </>
  );
};

export default App;

//
//
//
//
//
// import React, { useDebugValue } from "react";
// import { LiaUserSlashSolid } from "react-icons/lia";

// const App = () => {
//   //변하는 경우의 수//

//   //글자 형태 = 문자 = 형태
//   //숫자 = number
//   const string = "hello world!"; //string, `backtic
//   const number = 12;
//   const sample = `i say, ${string}`;
//   //null 값이 없는 값
//   const rn1 = null;
//   //undifined 할당된 값이 없음
//   const rn2 = undefined;

//   console.log(person, tel);

//   //참 거짓 boolean
//   const bool = true; //false
//   const isTakGood = true;
//   console.log(isTakGood);
//   //조건문 if
//   function talk() {
//     if (isTakGood) {
//       console.log("hello");
//     }
//     ConsoleController.log("hi");
//   }
//   console.log(talk());
//   talk();

//   //배열 = Array
//   const dates = [1, 2, 3];
//   const newArr = [];

//   console.log(newArr);

//   //use
//   const [Name, setName] = useState("Tak");
//   console.log(name);

//   <div>
//     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//   </div>;

//   //객체 object
//   const person = {
//     name: "tak",
//     year: "1991",
//   };

//   console.log(string, number, sample);

//   return <div>App</div>;
// };

// export default App;
