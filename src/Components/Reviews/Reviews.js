import React from "react";
import classes from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className={classes.ReviewsWrapper}>
      <div className={classes.ReviewsContent}>
        <div className={classes.ReviewContentText}>
          <h1 className={classes.ReviewsTitle}>Истории моих клиентов</h1>
          <p className={classes.ReviewsSubTitle}>Имена были изменены</p>
        </div>
        <div>
          <div className={classes.ReviewsBlock}>
            <div className={classes.ReviewsBlockItem1}>
              <img></img>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div className={classes.ReviewsBlock}>
          <div className={classes.ReviewsBlockItem2}>
            <img></img>
            <p></p>
            <p></p>
          </div>
          <div className={classes.ReviewsBlockItem3}>
            <img></img>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
