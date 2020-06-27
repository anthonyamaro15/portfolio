import React, { useState, useEffect } from "react";

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
    <div className="wrapper">
      <div className="Header">
        <div className="Header-wrapper">
          <h1>
            Hello!{" "}
            <span
              role="img"
              aria-label="wanted to say hi to whoever visit my webpage"
            >
              ✋
            </span>{" "}
          </h1>

          <div className="aboutme">
            <h1>
              My name is <span className="name">anthony amaro</span>, I'm a Full
              Stack Developer, I spend most of the time doing what I love to do.
            </h1>
          </div>

          <div className="email-me">
            <p>
              Email me
              <a href="mailto:anthonyamaro5555@gmail.com">
                {" "}
                <span>anthonyamaro5555@gmail.com</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={isUserScrolling}>
        <a href="#top">
          <span role="img" aria-label="go to top">
            👆
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
