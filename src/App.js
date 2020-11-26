import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { db } from "./firebase";
import Header from "./components/Header";
import Post from "./components/Post";
import Uploader from "./components/Uploader";
import InstagramEmbed from "react-instagram-embed";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fafafa",
  },
  left: {
    marginRight: "10px",
  },
  header: {
    position: "sticky",
    top: "0",
  },
  body: {
    display: "flex",
    justifyContent: "center",
  },
}));

const App = () => {
  const classes = useStyles();
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

  const postElements = posts.map(({ post, key }) => (
    <Post
      key={key}
      postId={key}
      user={user}
      userName={post.userName}
      caption={post.caption}
      imageUrl={post.url}
      //date={post.timeStamp}
    />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header
          user={user}
          setUser={setUser}
          userName={userName}
          setUserName={setUserName}
        />
      </div>
      <div className={classes.body}>
        <div className={classes.left}>
          {user && <Uploader user={user} />}
          {postElements}
        </div>
        <div className={classes.right}>
          <InstagramEmbed
            clientAccessToken="982232292263767|60af9d31ba0df4e4dd6ce24166ed553c"
            url="https://www.instagram.com/p/B_uf9dmAGPw/"
            maxWidth={375}
            hideCaption={false}
            containerTagName="div"
            injectScript
            protocol=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;
