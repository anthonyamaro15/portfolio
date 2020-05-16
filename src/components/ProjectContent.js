import React from "react";
import ProjectModal from "./ProjectModal";
import { portfolioData } from "../porfolioData";

const ProjectContent = ({ state }) => {
  return (
    <div className="ProjectContent">
      <h3 className="title-color">projects</h3>
      <div className="ProjectContent-display">
        {portfolioData.map((project, i) => (
          <ProjectModal key={i} project={project} state={state} />
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
