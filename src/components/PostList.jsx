import React from "react";
import { useSelector } from "react-redux";
import Post from "./ShowPost";
import AddPost from "./AddPost";

const PostList = () => {
  const { posts } = useSelector((state) => state);
  const postList = posts.map((eachPost) => (
    <Post key={eachPost.id} postId={eachPost.id} {...eachPost.data} />
  ));

  return (
    <div>
      <AddPost />
      {postList}
    </div>
  );
};

export default PostList;
