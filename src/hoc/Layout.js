import { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import classes from "./Layout.module.css";
import About from "../Components/About/About";

class Layout extends Component {
render () {
    return (
        <div className={classes.Layout}>
<Header />
<Main />
<About />
<Footer />
        </div>
    )
}
}
export default Layout

/* <Switch>
          <Route path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/about">
          <Header />
            <Main/>
            <Footer />
          </Route>
          <Route path="/services">
          <Header />
            <Main/>
            <Footer />
          </Route>
          <Route path="/rewiews">
          <Header />
            <Main/>
            <Footer />
          </Route>
          <Route path="/contacts">
          <Header />
            <Main/>
            <Footer />
          </Route>
        </Switch> */