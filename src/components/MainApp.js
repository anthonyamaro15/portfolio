import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const MainApp = () => {
  const [state, setState] = useState(false);
  //   console.log(state);
  // open === false => darkmode

  return (
    <div className={!state ? "dark-mode" : "Parent-wrapper"}>
      <Navbar setState={setState} state={state} />
      <Header />
      <Content state={state} />
      <Footer />
    </div>
  );
};

export default MainApp;
