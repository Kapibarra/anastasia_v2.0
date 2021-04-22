import React from "react";
import classes from "./Header.module.css";
import logo from "../../img/logo.svg"
import logo2 from "../../img/logo2text.svg"
import Navigation from "../../Ui/NavLink/Navigation";
import Burger from "../../Ui/BurgerMenu/Burger";

const Header = () => {
  if (window.screen.width >= 968) {
    return (
      <div className={classes.Header}>
        <div className={classes.Header__Logo}>
        <img src={logo} alt=""></img>
        {/* <img src={logo2} alt=""></img> */}
        <div className={classes.Header__Logo_text}>
          <p className={classes.Header__Logo_text1}>ANASTASIA R</p>
          <p className={classes.Header__Logo_text2}>PSYCHOTERAPY</p>
        </div>
        </div>
        <div className={classes.Header__Nav}>
          <Navigation />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.Header}>
      <div className={classes.Header__Logo}>
      <img src={logo} alt=""></img>
      <img src={logo2} alt=""></img>
      </div>
      <div className={classes.Header__Nav}>
        <Burger />
      </div>
    </div>
    )
  }

};

export default Header;
