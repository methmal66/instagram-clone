import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddCommentIcon from "@material-ui/icons/AddComment";
import firebase, { db } from "../firebase";
import "../css/addComment.css";

const AddComment = ({ postId, addName }) => {
  const [newComment, setNewComment] = useState("");
  const handleChange = (event) => setNewComment(event.target.value);
  const handleUpload = () => {
    db.collection("posts").doc(postId).collection("comments").add({
      useraddName: addName,
      comment: newComment,
      like: false,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setNewComment(null);
  };
  return (
    <div className="addComment">
      <div className="addComment__text">
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          onChange={handleChange}
        ></TextField>
      </div>
      <div>
        <IconButton
          className="addComment__btn"
          onClick={handleUpload}
          disabled={!newComment}
        >
          <AddCommentIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default AddComment;
