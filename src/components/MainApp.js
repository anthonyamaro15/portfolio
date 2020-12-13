import React from "react";
import MobileNavbar from './MobileNavbar';
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";

const MainApp = () => {
  return (
    <div>
      <Navbar/>
      <MobileNavbar />
      <Header />
      <Content/>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default MainApp;
