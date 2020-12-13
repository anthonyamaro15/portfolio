import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Switch from "./Switch";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Navbar = ({ setState, state }) => {
  const [showForm, setShowForm] = useState(false);
  const [scrolling, setScrolling] = useState(false);
//   const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 3) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (window.scrollY === 0) {
        setScrolling(false);
      }
    });
    return () => setScrolling(false);
  }, []);

   const isUserScrolling = scrolling ? "Navbar black" : "Navbar";

  return (
    <div className={isUserScrolling} id="top">
    {/**
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
   */}

      <div className="nav-links" id="top">
         <Link to="about" smooth={true} duration={1000}>
            <span>01.</span>
            about
         </Link>
         <Link to="work" smooth={true} duration={1000}>
            <span>02.</span>
            work
         </Link>
         <Link to="contact" smooth={true} duration={1000}>
            <span>03.</span>
            contact
         </Link>
      </div>
    </div>
  );
};

export default Navbar;
