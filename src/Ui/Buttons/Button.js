import React from "react";
import classes from "./Button.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button className={classes.Button}>
      <Router>
        <Link to={props.path} >{props.title}</Link>
      </Router>
    </button>
  );
};

export default Button;
