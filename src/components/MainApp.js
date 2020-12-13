import React, { useState, useEffect } from "react";
import MobileNavbar from './MobileNavbar';
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";

const MainApp = () => {
  const [state, setState] = useState(true);

  useEffect(() => {
    const getState = JSON.parse(localStorage.getItem("state"));
    if (getState) {
      setState(getState);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div className={state ? "dark-mode" : "Parent-wrapper"}>
      <Navbar setState={setState} state={state} />
      <MobileNavbar />
      <Header />
      <Content state={state} />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default MainApp;
