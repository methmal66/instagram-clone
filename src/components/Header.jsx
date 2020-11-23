import React from "react";
import Sign from "./Sign";
import "../css/Header.css";

const Header = ({ user, setUser, userName, setUserName }) => {
  return (
    <div className="header">
      <img
        className="header__image"
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
