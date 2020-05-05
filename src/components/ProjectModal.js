import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import sun from "../imgs/sunset.jpg";

import SingleProject from "./SingleProject";

export default function AlertDialog({ state }) {
  const [open, setOpen] = React.useState(false);
  // open === false => darkmode

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="main-wrapper">
      <div id="ProjectModal">
        <div id="ProjectModal-btn">
          <Button onClick={handleClickOpen}>
            <SingleProject />
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
              backgroundColor: `${!state ? "#050e1a" : ""}`,
              color: `${!state && "#afafbf"}`,
            }}
          >
            <div className="project-title">
              <h3>project title</h3>
            </div>
            <div id="img-project">
              <img src={sun} alt="sun" />
            </div>

            <div className="single-project-description">
              <h3>Description</h3>
              <p>description here</p>
              <div className="tec-use">
                <h3>technologies used</h3>
                <p>list leng libraries used for this project</p>
              </div>
              <div className="page-btns">
                <a
                  href="www.google.com"
                  target="_blank"
                  className={!state ? "dark-mode" : ""}
                >
                  github
                </a>
                <a href="#" className={!state ? "dark-mode" : ""}>
                  website
                </a>
              </div>
            </div>
          </div>

          <div
            id="btn-close"
            style={{
              backgroundColor: `${!state ? "#050e1a" : ""}`,
            }}
          >
            <button
              className={!state ? "dark-mode" : ""}
              onClick={handleClose}
              autoFocus
            >
              close
            </button>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
