import classes from "./Footer.module.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
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
          <SocialIcon url="https://wa.me/+79055025507" network="whatsapp" style={{ height: 30, width: 30, margin:5 }} />
          <SocialIcon url="tg://resolve?domain=@Nastyaro_s" network="telegram" style={{ height: 30, width: 30, margin:5 }} />
          <SocialIcon url="https://profi.ru/profile/RostoshinskayaAA/" network="yelp" style={{ height: 30, width: 30, margin:5 }} />
          <SocialIcon url="#" network="youtube" style={{ height: 30, width: 30, margin:5 }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
