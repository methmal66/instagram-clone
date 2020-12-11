import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import InstagramComp from "./components/InstagramComp";
import PostList from "./components/PostList";
import { useDispatch } from "react-redux";
import { downloadPosts } from "./Actions/posts";
import { useSelector } from "react-redux";
import { db } from "./firebase";

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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => dispatch(downloadPosts(snapshot.docs)));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <div className={classes.left}>
          <PostList user={user} />
        </div>
        <div className={classes.right}>
          <InstagramComp />
        </div>
      </div>
    </div>
  );
};

export default App;
