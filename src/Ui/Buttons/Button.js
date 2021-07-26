import React from "react";
import classes from "./Button.module.css";
import {NavLink} from 'react-router-dom'
import { motion } from "framer-motion";
import { fade } from "../Animations";

const Button = (props) => {
  return (
    
        <NavLink to={props.path || "/"} >
        <motion.button className={classes.Button}  type={props.type} variants={fade} initial="hidden" animate="show" exit="exit">
        {props.title}
        </motion.button>
        </NavLink>

  );
};

export default Button;
