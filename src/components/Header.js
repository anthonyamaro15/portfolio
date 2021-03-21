import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 800) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (window.scrollY < 750) {
        setScrolling(false);
      }
    });
  }, []);

  const isUserScrolling = scrolling ? "showHand goup" : "goup";
  return (
    <div className="wrapper" id="top">
      <div className="Header">
        <div className="Header-wrapper">
            <span
              className="say-hi"
            >
               Hello, my name is
            </span>
          <div className="aboutme">

          <h1>Anthony Amaro.</h1>
          <h1 className="what-ido">Always trying to improve.</h1>
          <p className="about-description">I'm a software engineer specializing in building exceptional and complex websites based in Las Vegas NV.</p>

          </div>

          <div className="email-me">
              <a href="mailto:anthonyamaro5555@gmail.com">
                Get in touch
              </a>
          </div>
        </div>
      </div>
      <div className={isUserScrolling}>
        <Link to="top" smooth={true} duration={1000}>
          <span>
            👆
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
