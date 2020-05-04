import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const MainApp = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <Navbar setState={setState} state={state} />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default MainApp;
