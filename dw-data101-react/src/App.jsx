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

import React from "react";
import Header from "./Components2/Header";
import Calendar from "./Components2/Calendar";
import Detail from "./Components2/Detail";
import Gallary from "./Components2/Gallary";
import Hinput from "./Components2/Hinput";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Gallary />
        <Calendar />
        <Detail />
        <Hinput />
      </main>
    </>
  );
};

export default App;
