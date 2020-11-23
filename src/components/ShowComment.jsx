import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreVertSharpIcon from "@material-ui/icons/MoreVertSharp";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../css/showComment.css";
import { db } from "../firebase";

const ShowComment = ({ postId, comId, name, text, logedIn }) => {
  const getModalStyle = () => ({
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  });

  const useStyles = makeStyles((theme) => ({
    avatar: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid lightgray",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleModal = () => {
    setAnchorEl(null);
    setOpen(!open);
  };
  const handleDelete = () => {
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .doc(comId)
      .delete();
    setOpen(!open);
  };

  return (
    <div className="showComment">
      <div className="showComment__left">
        <Avatar
          src="dummy"
          sizes="small"
          alt={name}
          className={classes.avatar + " showComment__avatar"}
        />
        <span>
          <strong> {name}</strong> {text}
        </span>
      </div>
      <div className="showComment__right">
        {logedIn ? (
          <IconButton>
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </IconButton>
        ) : null}

        <IconButton onClick={handleClick}>
          <MoreVertSharpIcon fontSize="small" />
        </IconButton>
      </div>
      <div>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={anchorEl}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleModal}>Delete</MenuItem>
        </Menu>
      </div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <span>
              This action can not undo. Are you sure want to delete this
              comment?
            </span>
            <div className="showComment__delete">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelete}
              >
                DELETE
              </Button>
            </div>
          </center>
        </div>
      </Modal>
    </div>
  );
};

export default ShowComment;
