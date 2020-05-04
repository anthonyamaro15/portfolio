import React from "react";
import sun from "../imgs/sunset.jpg";
import ProjectModal from "./ProjectModal";

const ProjectContent = () => {
  return (
    <div className="ProjectContent">
      <h3>projects</h3>
      <div className="ProjectContent-display">
        <ProjectModal />
        <ProjectModal />
      </div>
      {/**
      
        <div className="ProjectContent-display">
        <div className="side-one">
          <img src={sun} alt="sunset" />
          <div className="toggle-name">
            <p>project name</p>
          </div>
        </div>
        <div className="side-one">
          <img src={sun} alt="sunset" />
          <div className="toggle-name">
            <p>project name</p>
          </div>
        </div>
      </div>
      
      */}
    </div>
  );
};

export default ProjectContent;
