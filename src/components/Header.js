import React from "react";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="Header">
        <div className="Header-wrapper">
          <h1>Hello</h1>

          <div className="aboutme">
            <h1>
              My name is <span className="name">anthony amaro</span>, I'm
              currently a Full Stack Developer Student at Lambda School, I spend
              most of the time doing what I love which is learning to code.
            </h1>
          </div>

          <div className="email-me">
            <p>
              Email me <span>anthonyamaro5555@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
