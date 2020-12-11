import React from "react";
import { useSelector } from "react-redux";
import Post from "./ShowPost";
import AddPost from "./AddPost";

const PostList = () => {
  const { posts } = useSelector((state) => state);
  const postList = posts.map((eachPost) => {
    const { userName, caption, url } = eachPost.data;
    return (
      <Post
        key={eachPost.id}
        postId={eachPost.id}
        userName={userName}
        caption={caption}
        url={url}
      />
    );
  });

  return (
    <div>
      <AddPost />
      {postList}
    </div>
  );
};

export default PostList;
