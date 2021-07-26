// import { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import classes from "./Layout.module.css";
import { BrowserRouter as Switch, Redirect, Route , useLocation} from "react-router-dom";
import About from "../Components/About/About";
import Work from "../Components/Work/Work";
import Contact from "../Components/Contact/Contact";
import Reviews from "../Components/Reviews/Reviews";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { sliderContainer, slider , pageAnimation} from "../Ui/Animations";

const Layout = () => {
  const location = useLocation()
  return (
    <div className={classes.Layout} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AnimatePresence exitBeforeEnter> 
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Redirect to={"/"} />
          <Route path="/about">
            <Header />
            <About />
            <Footer style={{ backgroundColor: "#f1f1f1" }} />
          </Route>
          <Route path="/services">
            <Header />
            <Work />
            <Footer style={{ backgroundColor: "#f1f1f1" }} />
          </Route>
          <Route path="/rewiews">
            <Header />
            <Reviews />
            <Footer style={{ backgroundColor: "#f1f1f1" }} />
          </Route>
          <Route path="/contacts">
            <Header />
            <Contact />
            <Footer style={{ backgroundColor: "#f1f1f1" }} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
} 

export default Layout;

