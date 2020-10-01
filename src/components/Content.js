import React from "react";
import ProjectContent from "./ProjectContent";

const Content = ({ state }) => {
  return (
    <div className="Content-container">
      <div className="aboutme-container">
        <h3 className="title-color">about me</h3>
        <p>
          I've been teaching myself to code since 2018, when I was working a
          full time job working 70+ hrs a week when I decided that I wanted to
          change carriers and become a <span> software engineer</span>. Learning
          new technologies has always been my passion,{" "}
          <span>solving problems</span> is what I love the most and that is one
          of the reason I decided to join <span>Lambda School</span>.{" "}
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
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS/Sass/Less</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="frameworks shared-width">
              <h3>frameworks</h3>
              <ul>
                <li>Redux</li>
                <li>Node JS</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="libraries shared-width">
              <h3>libraries</h3>
              <ul>
                <li>React JS</li>

                <li>knex JS</li>
                <li>axios</li>
                <li>React router</li>
                <li>Formik</li>
                <li>React Hook Forms</li>
              </ul>
            </div>
            <div className="tools shared-width">
              <h3>tools</h3>
              <ul>
                <li>postman</li>
                <li>git & github</li>
                <li>chrome devTools</li>
                <li>terminal</li>
                <li>Nodemailer</li>
                <li>SendGrid API</li>
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
