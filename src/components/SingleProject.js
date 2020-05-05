import React from "react";

const SingleProject = ({ project }) => {
  return (
    <div className="side-one">
      <img src={project.image} alt={project.name} />
      <div className="toggle-name">
        <p>{project.name}</p>
      </div>
    </div>
  );
};

export default SingleProject;
