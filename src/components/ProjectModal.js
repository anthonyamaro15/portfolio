import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import SingleProject from "./SingleProject";

export default function AlertDialog({ state, project }) {
  const [open, setOpen] = React.useState(false);
  // open === false => darkmode
  const { name, description, github, image, site, tech_used } = project;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="ProjectModal">
      <div id="ProjectModal-btn">
        <Button
          onClick={handleClickOpen}
          style={{
            border: `${state ? "none" : "1px solid rgb(221, 218, 218)"}`,
          }}
        >
          <SingleProject project={project} />
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          id="project-info"
          style={{
            backgroundColor: `${state ? "#050e1a" : ""}`,
            color: `${state && "#afafbf"}`,
          }}
        >
          <div className="project-title">
            <h3>{name}</h3>
          </div>
          <div id="img-project">
            <img src={image} alt="sreenshots of projects" />
            {/**
          {video ? (
              <video src={video} autoPlay loop poster={image}></video>
            ) : (
              <img src={image} alt="sun" />
            )}
         */}
          </div>

          <div className="single-project-description">
            <h3>Description</h3>
            <p className="subtitle">{description.subtitle}</p>
            <div className="description">
              {description.roles.map((des, i) => (
                <p className="role" key={i}>
                  {des.role}
                </p>
              ))}
            </div>

            <div className="tec-use">
              <h3>technologies used</h3>
              <p className="frontend">
                <span
                  style={{
                    color: `${state ? "#f4f4f4" : "#333"}`,
                  }}
                >
                  Front-end:
                </span>
                {tech_used.frontend}
              </p>
              {tech_used.backend ? (
                <p className="backend">
                  <span
                    style={{
                      color: `${state ? "#f4f4f4" : "#333"}`,
                    }}
                  >
                    Back-end:
                  </span>
                  {tech_used.backend}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="page-btns">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={state ? "dark-mode" : ""}
              >
                github
              </a>
              <a
                href={site}
                target="_blank"
                className={state ? "dark-mode" : ""}
                rel="noopener noreferrer"
              >
                website
              </a>
            </div>
          </div>
        </div>

        <div
          id="btn-close"
          style={{
            backgroundColor: `${state ? "#050e1a" : ""}`,
          }}
        >
          <button
            className={state ? "dark-mode" : ""}
            onClick={handleClose}
            autoFocus
          >
            close
          </button>
        </div>
      </Dialog>
    </div>
  );
}
