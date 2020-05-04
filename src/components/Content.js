import React from "react";
import ProjectContent from "./ProjectContent";

const Content = () => {
  return (
    <div className="Content-container">
      <div className="aboutme-container">
        <h3>about me</h3>
        <p>
          I've been teaching myself to code since 2019 when I was working a full
          time job, I decided that I wanted to change carriers and{" "}
          <span>become a software engineer</span> that is one of the reason I
          decided to join <span>Lambda School</span>.{" "}
        </p>
      </div>
      <div className="Content-skills">
        <h3 className="position-title">skills</h3>
        <div className="skills-container">
          <div className="languages-wrapper">
            <div className="languages">
              <h3>languages</h3>
              <ul>
                <li>javaScript + (ES6)</li>
                <li>HTML</li>
                <li>CSS/Sass/Less</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="frameworks">
              <h3>frameworks/libraries</h3>
              <ul>
                <li>react</li>
                <li>Redux</li>
                <li>node</li>
                <li>express</li>
                <li>knex JS</li>
              </ul>
            </div>
            <div className="tools">
              <h3>tools</h3>
              <ul>
                <li>postman</li>
                <li>git & github</li>
                <li>chrome devTools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ProjectContent />
    </div>
  );
};

export default Content;
