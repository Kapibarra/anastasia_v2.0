import React from "react";
import classes from "./Button.module.css";
import {NavLink} from 'react-router-dom'

const Button = (props) => {
  return (
    
        <NavLink to={props.path || "/"} >
        <button className={classes.Button}  type={props.type}>
        {props.title}
        </button>
        </NavLink>

  );
};

export default Button;
