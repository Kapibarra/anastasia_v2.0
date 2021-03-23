import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__Logo}></div>
      <div className={classes.Header__Nav}>
        <div className={classes.Header__Nav_item}></div>
      </div>
    </div>
  );
};

export default Header;
