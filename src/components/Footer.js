import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="Footer">
      <div className="madeby">Developed by Anthony Amaro 2020</div>

      <nav>
        <a
          href="https://www.linkedin.com/in/anthonyamaro15/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/anthonyamaro15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
