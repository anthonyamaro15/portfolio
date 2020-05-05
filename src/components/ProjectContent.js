import React from "react";
import sun from "../imgs/sunset.jpg";
import ProjectModal from "./ProjectModal";

const ProjectContent = ({ state }) => {
  return (
    <div className="ProjectContent">
      <h3 className="title-color">projects</h3>
      <div className="ProjectContent-display">
        <ProjectModal state={state} />
      </div>
    </div>
  );
};

export default ProjectContent;
