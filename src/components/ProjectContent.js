import React from "react";
import sun from "../imgs/sunset.jpg";
import ProjectModal from "./ProjectModal";

const ProjectContent = () => {
  return (
    <div className="ProjectContent">
      <h3 className="title-color">projects</h3>
      <div className="ProjectContent-display">
        <ProjectModal />
        <ProjectModal />
      </div>
    </div>
  );
};

export default ProjectContent;
