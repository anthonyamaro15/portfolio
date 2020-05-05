import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const MainApp = () => {
  const [state, setState] = useState(false);

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
      <Header />
      <Content state={state} />
      <Footer />
    </div>
  );
};

export default MainApp;
