import classes from "./Footer.module.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import sociallogo1 from "../../img/whatsapp_logo.png"
import sociallogo2 from "../../img/telegram_logo2.png"
import sociallogo3 from "../../img/profi-logo.png"
import sociallogo4 from "../../img/youtube_logo.png"

const Footer = (props) => {
  return (
    <div className={classes.FooterWrapper} style={props.style}>
      <div className={classes.Footer}>
        <div className={classes.FooterCopyright}>
          {" "}
          &copy; {new Date().getFullYear()} Novikov.N.M.
        </div>
        <div className={classes.SocialLogos}>
          <div className={classes.SocialIconsWrapper}>
              <NavLink to="https://wa.me/+79055025507"><img src={sociallogo1} className={classes.SocialIconsImg}></img></NavLink>
              <NavLink to="tg://resolve?domain=@Nastyaro_s"><img src={sociallogo2} className={classes.SocialIconsImg}></img></NavLink>
              <NavLink to="https://profi.ru/profile/RostoshinskayaAA/"><img src={sociallogo3} className={classes.SocialIconsImg}></img></NavLink>
              <NavLink to="#"><img src={sociallogo4} className={classes.SocialIconsImg}></img></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
