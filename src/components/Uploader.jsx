import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import firebase, { db, storage } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "white",
    border: "1px solid lightgray",
    marginBottom: "40px",
    maxWidth: "500px",
  },
  text: {
    width: "501px",
  },
  progress: {
    width: "375px",
    marginLeft: "12px",
  },
  chooser: {
    marginBottom: "10px",
    marginTop: "10px",
    maxWidth: "500px",
  },
  footer: {
    display: "flex",
    alignItems: "center",
  },
}));

const Uploader = ({ user }) => {
  const classes = useStyles();
  const [caption, setCaption] = useState();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(null);

  const handleCaption = (event) => {
    setCaption(event.target.value);
  };

  const handleInput = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setProgress(null);
      setCaption("");
    }
  };

  const handleUpload = () => {
    const task = storage.ref("images/" + image.name).put(image);
    task.on(
      "state_changed",
      (snapshot) => {
        const currentProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(currentProgress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images/")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              url: url,
              userName: user.displayName,
            });
          });
      }
    );
  };

  const formatProgress = () => {
    if (progress) {
      if (progress === 100) {
        return <CheckCircleOutlineIcon color="primary" />;
      }
      return progress + "%";
    }
    return;
  };

  return (
    <div className={classes.root}>
      <input
        className={classes.chooser}
        type="file"
        accept="images/*"
        onChange={handleInput}
      />
      <TextField
        className={classes.text}
        variant="outlined"
        placeholder="Enter your caption here"
        rows="5"
        width="200px"
        multiline
        onChange={handleCaption}
      >
        {caption}
      </TextField>
      <div className={classes.footer}>
        <Button onClick={handleUpload} disabled={!image}>
          Upload
        </Button>
        <LinearProgress
          className={classes.progress}
          variant="determinate"
          value={progress}
        />
        <span>{formatProgress()}</span>
      </div>
    </div>
  );
};

export default Uploader;
