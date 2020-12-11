import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CommentList from "./CommentList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    maxWidth: "500px",
    border: "1px solid lightgray",
    marginBottom: "40px",
  },
  header: {
    display: "flex",
    padding: "20px",
    alignItems: "center",
  },
  date: {
    color: "rgb(145, 143, 143)",
  },
  namedate: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    objectFit: "contain",
    borderBottom: "1px solid lightgray",
    borderTop: "1px solid lightgray",
  },
  footer: {
    padding: "20px",
  },
  avatar: {
    marginRight: "10px",
  },
}));

const Post = ({ postId, userName, caption, url }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Avatar className={classes.avatar} src="dummy" alt={userName} />
        <div className={classes.namedate}>
          <span>{userName}</span>
        </div>
      </div>

      <img className={classes.image} src={url} alt="post" />
      <div className={classes.footer}>
        <span>
          <strong>{userName} </strong>
          {caption}
        </span>
      </div>
      <CommentList id={postId} key={postId} />
    </div>
  );
};

export default Post;
