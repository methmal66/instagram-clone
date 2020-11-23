import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chat from "./Chat";
import "../css/Post.css";

const Post = ({ user, postId, userName, caption, imageUrl, date }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src="dummy" alt={userName} />
        <div className="post__name-date">
          <span>{userName}</span>
          <span className="post__date">{date}</span>
        </div>
      </div>

      <img className="post__image" src={imageUrl} alt="post" />
      <div className="post__footer">
        <span>
          <strong>{userName} </strong>
          {caption}
        </span>
      </div>
      <Chat id={postId} addUser={user} logedIn={Boolean(user)} />
    </div>
  );
};

export default Post;
