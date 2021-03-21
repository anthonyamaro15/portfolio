import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
    <div className={isUserScrolling}>
      <div className="nav-links">
         <Link to="about" offset={-80} smooth={true} duration={1000}>
            <span>01.</span>
            about
         </Link>
         <Link to="skills" offset={-80} smooth={true} duration={1000}>
            <span>02.</span>
            skills
         </Link>
         <Link to="projects" offset={-80} smooth={true} duration={1000}>
            <span>03.</span>
            projects
         </Link>
         <Link to="contact" offset={-80} smooth={true} duration={1000}>
            <span>04.</span>
            contact
         </Link>
      </div>
    </div>
  );
};

export default Navbar;
