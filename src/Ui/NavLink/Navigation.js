
import React, { Fragment } from "react";
import {
  BrowserRouter ,
  Link
} from "react-router-dom";


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