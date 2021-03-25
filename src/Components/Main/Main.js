import classes from "./Main.module.css";
import React from "react";
import profile from "../../img/profile.png"
import Button from "../../Ui/Buttons/Button";

const Main = () => {
  return (
    <div className={classes.MainWrapper}>
      <div className={classes.MainContent}>
<div className={classes.MainContentText}>
    <p>Профессиональная консультация
от дипломированного психолога
и преподавателя</p>
<Button title="Оставить заявку"/>
</div>
<div className={classes.MainContentImage}>
<img src={profile} alt="">
</img>
</div>
      </div>
    </div>
  );
};
export default Main;
