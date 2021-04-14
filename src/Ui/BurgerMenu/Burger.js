import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import {
    BrowserRouter ,
    Link
  } from "react-router-dom";
  
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0',
      background: 'rgba(#497577, 0.8)'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      display:'block',
      background: 'rgba(73, 117, 119, 0.9)'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      
    },
    bmItem: {
        display:'block',
        padding: '5px'
    },
    bmOverlay: {
      display: 'none',
    }
  }

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right styles={ styles }>
      <Link to="/">Главная</Link>
              <Link to="/about">Кто я</Link>
              <Link to="/services">Услуги</Link>
              <Link to="/rewiews">Отзывы</Link>
              <Link to="/contacts">Контакты</Link>
      </Menu>
    );
  }
}
export default Burger