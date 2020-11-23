import "./css/App.css";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Header from "./components/Header";
import Post from "./components/Post";
import Uploader from "./components/Uploader";
import InstagramEmbed from "react-instagram-embed";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  useEffect(
    () =>
      db
        .collection("posts")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              key: doc.id,
              id: doc.id,
              post: doc.data(),
            }))
          )
        ),
    []
  );

  return (
    <div className="app">
      <div className="app__header">
        <Header
          user={user}
          setUser={setUser}
          userName={userName}
          setUserName={setUserName}
        />
      </div>
      <div className="app__body">
        <div className="app__left">
          {user ? <Uploader user={user} /> : null}

          {posts.map(({ post, key }) => (
            <Post
              key={key}
              postId={key}
              user={user}
              userName={post.userName}
              caption={post.caption}
              imageUrl={post.url}
              //date={post.timeStamp}
            />
          ))}
        </div>
        <div className="app__right">
          <InstagramEmbed
            clientAccessToken="982232292263767|60af9d31ba0df4e4dd6ce24166ed553c"
            url="https://www.instagram.com/p/B_uf9dmAGPw/"
            maxWidth={375}
            hideCaption={false}
            containerTagName="div"
            injectScript
            protocol=""
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
