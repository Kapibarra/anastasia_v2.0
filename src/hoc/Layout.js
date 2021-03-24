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
{/* <Switch>
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
        </Switch> */}