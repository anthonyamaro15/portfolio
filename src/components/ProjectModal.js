import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import sun from "../imgs/sunset.jpg";
import { AiFillGithub } from "react-icons/ai";

import SingleProject from "./SingleProject";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
        <DialogContent>
          <div id="project-info">
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
                <a href="www.google.com" target="_blank">
                  github
                </a>
                <a href="#">website</a>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div id="btn-close">
            <Button onClick={handleClose} autoFocus>
              close
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
