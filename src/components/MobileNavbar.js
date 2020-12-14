import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const MobileNavbar = () => {
  const [isMoblie, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMoblie);
  };

  useEffect(() => {
    if (isMoblie) {
      window.document.documentElement.style.overflow = "hidden";
    } else {
      window.document.documentElement.style.overflow = "auto";
    }
  }, [isMoblie]);

  return (
    <div>
      <div
        className={!isMoblie ? "burger-menu" : "burger-menu close"}
        onClick={toggleMenu}
      >
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className={isMoblie ? "MobileNavbar show" : "MobileNavbar"}>
        <nav>
          <Link to="about" onClick={toggleMenu} smooth={true} duration={1000} >
            <span>01.</span>
            About
          </Link>
          <Link to="skills" onClick={toggleMenu} smooth={true} duration={1000} >
            <span>02.</span>
            Skills
          </Link>
          <Link to="work" onClick={toggleMenu} smooth={true} duration={1000} >
            <span>03.</span>
            Work
          </Link>
          <Link to="contact" onClick={toggleMenu} smooth={true} duration={1000} >
            <span>04.</span>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;