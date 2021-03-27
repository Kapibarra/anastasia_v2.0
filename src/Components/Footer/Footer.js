import classes from "./Footer.module.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import sociallogo1 from "../../img/whatsapp_logo.png"

const Footer = (props) => {
  return (
    <div className={classes.FooterWrapper}>
      <div className={classes.Footer}>
        <div className={classes.FooterCopyright}>
          {" "}
          &copy; {new Date().getFullYear()} Novikov.N.M.
        </div>
        <div className={classes.SocialLogos}>
          <div className={classes.SocialIconsWrapper}>
            <Router>
              <Link to="#"><img src={sociallogo1} className={classes.SocialIconsImg}></img></Link>
              <Link to="#"><img src={sociallogo1} className={classes.SocialIconsImg}></img></Link>
              <Link to="#"><img src={sociallogo1} className={classes.SocialIconsImg}></img></Link>
              <Link to="#"><img src={sociallogo1} className={classes.SocialIconsImg}></img></Link>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
