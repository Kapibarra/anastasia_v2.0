import React from "react";
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
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">Кто я</Link>
            </li>
            <li>
              <Link to="/services">Услуги</Link>
            </li>
            <li>
              <Link to="/rewiews">Отзывы</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
    )
}
export default Navigation