import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Gallery from "./components/Gallery";
import Auth from "./components/Auth";
import Input from "./components/input";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Gallery />
        <Auth />
        <Input />
      </main>
      <Footer />
    </>
  );
};

export default App;
