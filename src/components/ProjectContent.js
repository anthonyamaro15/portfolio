import React from "react";
import ProjectModal from "./ProjectModal";
import { portfolioData } from "../porfolioData";

const ProjectContent = () => {
  return (
    <div className="ProjectContent" id="projects">
      <h3 className="title-color"><span>03.</span> projects</h3>
      <div className="ProjectContent-display">
        {portfolioData.map((project, i) => (
          <ProjectModal key={i} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
