import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { auth } from "../firebase";
import "../css/Sign.css";

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid lightgray",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Sign = ({ userName, user, setUserName, setUser }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [isDisbled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [open, setOpen] = useState({ up: false, in: false });
  const handleUserName = (event) => setUserName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleConfirmPassword = (event) =>
    setIsDisabled(() => {
      const conPassword = event.target.value;
      return !conPassword || !password || conPassword !== password;
    });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, userName]);

  const handleSubmitUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((error) => alert(error.message));
    setOpen({ up: false, in: true });
    setEmail(null);
    setPassword(null);
  };

  const handleSubmitIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpen({ up: false, in: false });
    setEmail(null);
    setPassword(null);
  };

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <div className="sign">
      {user ? (
        <Button onClick={handleLogout}>Log out</Button>
      ) : (
        <Fragment>
          <Button onClick={() => setOpen({ up: true, in: false })}>
            Sign up
          </Button>
          <Button onClick={() => setOpen({ up: false, in: true })}>
            Sign in
          </Button>
          <Modal
            open={open.up}
            onClose={() => setOpen({ up: false, in: false })}
          >
            <form>
              <div
                style={modalStyle}
                className={classes.paper + " sign__paper sign__up"}
              >
                <img
                  className="sign__image sign__item"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt="instagram logo"
                />

                <TextField
                  className="sign__item"
                  type="text"
                  label="user name"
                  variant="outlined"
                  size="small"
                  onChange={handleUserName}
                />
                <TextField
                  className="sign__item"
                  type="email"
                  label="e-mail address"
                  variant="outlined"
                  size="small"
                  onChange={handleEmail}
                />
                <TextField
                  className="sign__item"
                  type="password"
                  label="password"
                  variant="outlined"
                  size="small"
                  onChange={handlePassword}
                />
                <TextField
                  className="sign__item"
                  type="password"
                  label="confirm password"
                  variant="outlined"
                  size="small"
                  onChange={handleConfirmPassword}
                />
                <Button
                  type="submit"
                  onClick={handleSubmitUp}
                  disabled={isDisbled}
                >
                  Sign up
                </Button>
              </div>
            </form>
          </Modal>
          <Modal
            open={open.in}
            onClose={() => setOpen({ up: false, in: false })}
          >
            <form>
              <div
                style={modalStyle}
                className={classes.paper + " sign__paper sign__in"}
              >
                <img
                  className="sign__image sign__item"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt="instagram logo"
                />
                <TextField
                  className="sign__item"
                  type="email"
                  label="e-mail address"
                  variant="outlined"
                  size="small"
                  onChange={handleEmail}
                />
                <TextField
                  className="sign__item"
                  type="password"
                  label="password"
                  variant="outlined"
                  size="small"
                  onChange={handlePassword}
                />
                <Button type="submit" onClick={handleSubmitIn} disabled={false}>
                  Sign in
                </Button>
              </div>
            </form>
          </Modal>
        </Fragment>
      )}
    </div>
  );
};

export default Sign;
