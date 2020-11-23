import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import ShowComment from "./ShowComment";
import { db } from "../firebase";
import "../css/Chat.css";

const Chat = ({ id, addUser, logedIn }) => {
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
    []
  );

  return (
    <div className="Chat">
      <div className="chat__comments">
        {comments.map((com) => (
          <ShowComment
            logedIn={logedIn}
            postId={id}
            comId={com.id}
            name={com.comment.useraddName}
            text={com.comment.comment}
            like={com.comment.like}
          />
        ))}
      </div>
      {logedIn ? (
        <AddComment postId={id} addName={addUser.displayName} />
      ) : null}
    </div>
  );
};

export default Chat;
