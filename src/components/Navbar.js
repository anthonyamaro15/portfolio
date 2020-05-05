import React from "react";
import Switch from "./Switch";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Navbar = ({ setState, state }) => {
  return (
    <div className="Navbar" id="top">
      <div className="darkmode">
        <div className="day-icon">
          <FiSun />
        </div>
        <div className="switch">
          <Switch setState={setState} state={state} />
        </div>
        <div className="night-icon">
          <FiMoon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
