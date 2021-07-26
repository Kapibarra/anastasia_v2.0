import React from "react";
import classes from "./Header.module.css";
import logo from "../../img/logo_dark2.png"
import Navigation from "../../Ui/NavLink/Navigation";
import Burger from "../../Ui/BurgerMenu/Burger";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';
import {fade, pageAnimation} from '../../Ui/Animations'

const Header = () => {
  if (window.screen.width >= 968) {
    return (
      <motion.div className={classes.Header}  variants={fade} initial="hidden" animate="show" exit="exit">
      <NavLink to="">
        <div className={classes.Header__Logo}>
        <img src={logo} alt="" className={classes.Header__LogoItem}></img>
        {/* <img src={logo2} alt=""></img> */}
        <div className={classes.Header__Logo_text}>
          <p className={classes.Header__Logo_text1}>ANASTASIA R</p>
          <p className={classes.Header__Logo_text2}>PSYCHOTERAPY</p>
        </div>
        </div>
        </NavLink>
        <div className={classes.Header__Nav}>
          <Navigation />
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div className={classes.Header} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <div className={classes.Header__Logo}>
      <img src={logo} alt="" className={classes.Header__LogoItem}></img>
      <div className={classes.Header__Logo_text}>
          <p className={classes.Header__Logo_text1}>ANASTASIA R</p>
          <p className={classes.Header__Logo_text2}>PSYCHOTERAPY</p>
        </div>
      </div>
      <div className={classes.Header__Nav}>
        <Burger />
      </div>
    </motion.div>
    )
  }

};

export default Header;
