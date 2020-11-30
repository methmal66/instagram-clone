import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import ShowComment from "./ShowComment";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  comments: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Chat = ({ id, addUser, logedIn }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      db
        .collection("posts")
        .doc(id)
        .collection("comments")
        .orderBy("timeStamp", "asc")
        .onSnapshot((snapShot) =>
          setComments(
            snapShot.docs.map((doc) => ({
              key: doc.id,
              id: doc.id,
              comment: doc.data(),
            }))
          )
        ),
    // eslint-disable-next-line
    []
  );

  const showCommentElements = comments.map((com) => (
    <ShowComment
      logedIn={logedIn}
      postId={id}
      comId={com.id}
      name={com.comment.useraddName}
      text={com.comment.comment}
      like={com.comment.like}
    />
  ));

  return (
    <div>
      <div className={classes.comments}>{showCommentElements}</div>
      {logedIn && <AddComment postId={id} addName={addUser.displayName} />}
    </div>
  );
};

export default Chat;
