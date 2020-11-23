import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import firebase, { db, storage } from "../firebase";
import "../css/Uploader.css";

const useStyles = makeStyles((theme) => ({
  text: {
    width: "501px",
  },
  progress: {
    width: "375px",
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
    <div className="uploader">
      <input
        className="uploader__chooser"
        type="file"
        accept="images/*"
        onChange={handleInput}
      />
      <TextField
        className={classes.text + " uploader__text"}
        variant="outlined"
        placeholder="Enter your caption here"
        rows="5"
        width="200px"
        multiline
        onChange={handleCaption}
      >
        {caption}
      </TextField>
      <div className="uploader__footer">
        <Button onClick={handleUpload} disabled={!image}>
          Upload
        </Button>
        <LinearProgress
          className={classes.progress + " uploader__bar"}
          variant="determinate"
          value={progress}
        />
        <span>{formatProgress()}</span>
      </div>
    </div>
  );
};

export default Uploader;
