import classes from "./Navigation.module.css";
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Footer from "../../Components/Footer/Footer";
// import Header from "../../Components/Header/Header";
// import Main from "../../Components/Main/Main";

const Navigation = () => {
    return (
      <Fragment>
              <Link to="/">Главная</Link>
              <Link to="/about">Кто я</Link>
              <Link to="/services">Услуги</Link>
              <Link to="/rewiews">Отзывы</Link>
              <Link to="/contacts">Контакты</Link>
      </Fragment>
    )
}
export default Navigation