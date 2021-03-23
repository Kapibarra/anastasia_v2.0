import { Component } from "react";
import Header from "../Components/Header/Header";
import classes from "./Layout.module.css"

class Layout extends Component {
render () {
    return (
        <div className={classes.Layout}>
<Header />
        </div>
    )
}
}
export default Layout