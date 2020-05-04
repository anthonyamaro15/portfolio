import React from "react";
import sun from "../imgs/sunset.jpg";

const SingleProject = () => {
  return (
    <div className="side-one">
      <img src={sun} alt="sunset" />
      <div className="toggle-name">
        <p>project name</p>
      </div>
    </div>
  );
};

export default SingleProject;
