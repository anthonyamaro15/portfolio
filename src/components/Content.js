import React from "react";
import ProjectContent from "./ProjectContent";

const Content = ({ state }) => {
  return (
    <div className="Content-container">
      <div className="aboutme-container">
        <h3 className="title-color">about me</h3>
        <p>
          I've been teaching myself to code since 2019 when I was working a full
          time job, I decided that I wanted to change carriers and{" "}
          <span>become a software engineer</span> that is one of the reason I
          decided to join <span>Lambda School</span>.{" "}
        </p>
      </div>
      <div className="Content-skills">
        <h3 className="title-color">skills</h3>
        <div className="skills-container">
          <div className="languages-wrapper">
            <div className="languages shared-width">
              <h3>languages</h3>
              <ul>
                <li>javaScript + (ES6)</li>
                <li>HTML</li>
                <li>CSS/Sass/Less</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="frameworks shared-width">
              <h3>frameworks</h3>
              <ul>
                <li>Redux</li>
                <li>node</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="libraries shared-width">
              <h3>libraries</h3>
              <ul>
                <li>React</li>

                <li>knex JS</li>
                <li>axios</li>
                <li>React router</li>
                <li>Formik</li>
                <li>React hook forms</li>
              </ul>
            </div>
            <div className="tools shared-width">
              <h3>tools</h3>
              <ul>
                <li>postman</li>
                <li>git & github</li>
                <li>chrome devTools</li>
                <li>terminal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ProjectContent state={state} />
    </div>
  );
};

export default Content;
