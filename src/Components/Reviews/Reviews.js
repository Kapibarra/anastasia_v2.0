import React from "react";
import classes from "./Reviews.module.css";
import help1 from "../../img/help1.png"
import help2 from "../../img/help2.png"
import help3 from "../../img/help3.png"


const Reviews = () => {
  return (
    <div className={classes.ReviewsWrapper}>
      <div className={classes.ReviewsContent}>
        <div className={classes.ReviewContentText}>
          <h1 className={classes.ReviewsTitle}>Истории моих клиентов:</h1>
          <p className={classes.ReviewsSubTitle}>Имена были изменены.</p>
        </div>
        <div>
          <div className={classes.ReviewsBlock}>
            <div className={classes.ReviewsBlockItem1}>
              <img src={help1}></img>
              <p>
                Спасибо Анастасии за проделанную работу, я пришла на
                консультации с совершенно разбитом состоянии, не могла нормально
                учиться и просто лежала дома. Во время консультаций я не хотела
                делать домашние задания, хотела уйти и дальше лениться дома и
                жалеть себя, но в какой то момент меня просто пробило. У меня
                стал появляться ресурс о котором я не знала. Простых слов не
                хватит , что бы сказать , что я благодарна Анастасии за помощь с
                моими демонами. Огромное спасибо!
              </p>
              <p>Ксения, 25 лет</p>
            </div>
          </div>
        </div>
        <div className={classes.ReviewsBlock}>
          <div className={classes.ReviewsBlockItem2}>
            <img src={help2}></img>
            <p>Работал у Анастасии с метафорическими картами, в начале думал что полная чушь и делу это никак не поможет, однако после нескольких сеансов оказалось что все совсем наоборот   и это действительно помогло мне  значительно продвинуться в решении моей проблемы. Буду и дальше обращаться к Анастасии за помощью.</p>
            <p>Владислав , 31 год</p>
          </div>
          <div className={classes.ReviewsBlockItem3}>
            <img src={help3}></img>
            <p>Работаем с Анастасией уже несколько месяцев и я хочу сказать спасибо за проделанный труд, сейчас смотрю на многие вещи спокойнее и наконец наладил отношения с девушкой. Могу точно сказать что Анастасия знает как делать и как работать.</p>
            <p>Максим , 22 года</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
