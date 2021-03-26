import classes from './Footer.module.css'
import React from 'react'

const Footer = () => {
return (
    <div className={classes.FooterWrapper}>
        <div className={classes.Footer}>
<div className={classes.FooterCopyright}> &copy; {new Date().getFullYear()} Novikov.N.M.</div>
        </div>
    </div>
)
}
export default Footer