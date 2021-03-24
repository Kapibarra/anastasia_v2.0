import React from "react";
import classes from "./Header.module.css";
import logo from "../../img/logo.svg"
import Navigation from "../../Ui/NavLink/Navigation";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__Logo}><img src={logo} alt=""></img></div>
      <div className={classes.Header__Nav}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
