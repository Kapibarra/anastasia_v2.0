import classes from "./Slider.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import dip1 from '../../img/diplom1.png'
import dip2 from '../../img/diplom2.png'
import dip3 from '../../img/diplom3.png'
import dip4 from '../../img/diplom4.png'
import dip5 from '../../img/diplom5.png'
import dip6 from '../../img/diplom6.png'
import dip7 from '../../img/diplom7.png'
import dip8 from '../../img/diplom8.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={classes.SliderWrapper}>
        <Slider {...settings}>
          <div className={classes.Slide}>
            <img src={dip1} alt="diplom"></img>
          </div>
          <div className={classes.Slide}>
          <img src={dip2} alt="diplom"></img>
          </div>
          <div className={classes.Slide}>
          <img src={dip3} alt="diplom"></img>
          </div>
          <div className={classes.Slide}>
          <img src={dip4} alt="diplom"></img>
          </div>
          <div className={classes.Slide}>
            <img src={dip5} alt="diplom"></img>
          </div>
          <div className={classes.Slide}>
            <img src={dip6} alt="diplom"></img>
          </div>
          <div className={classes.Slide}>
            <img src={dip7} alt="diplom"></img>
          </div>
          <div className={classes.Slide}>
            <img src={dip8} alt="diplom"></img>
          </div>
        </Slider>
      </div>
    );
  }
}