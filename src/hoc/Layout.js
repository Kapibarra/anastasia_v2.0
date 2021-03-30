import { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import classes from "./Layout.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../Components/About/About";
import Work from "../Components/Work/Work";
import Contact from "../Components/Contact/Contact";
import Reviews from "../Components/Reviews/Reviews";

class Layout extends Component {
render () {
    return (
        <div className={classes.Layout}>
<Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/services">
            <Header />
            <Work />
            <Footer />
          </Route>
          <Route path="/rewiews">
            <Header />
            <Reviews />
            <Footer />
          </Route>
          <Route path="/contacts">
            <Header />
            <Contact />
            <Footer />
          </Route>
        </Switch>
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