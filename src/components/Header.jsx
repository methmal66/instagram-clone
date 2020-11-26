import React from "react";
import Sign from "./Sign";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    objectFit: "contain",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "10px",
    border: "1px solid lightgray",
    marginBottom: "20px",
  },
  image: {
    objectFit: "contain",
  },
}));

const Header = ({ user, setUser, userName, setUserName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="instagram logo"
      />
      <Sign
        userName={userName}
        user={user}
        setUserName={setUserName}
        setUser={setUser}
      />
    </div>
  );
};

export default Header;
