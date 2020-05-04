import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const MainApp = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <Navbar setState={setState} state={state} />
      <Header />
    </div>
  );
};

export default MainApp;
