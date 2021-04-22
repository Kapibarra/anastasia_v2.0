import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    return (
            <input className={classes.Input} placeholder={props.placeholder} name={props.name}></input>
    )
}

export default Input 