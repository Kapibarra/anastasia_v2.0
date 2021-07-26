import classes from "./Main.module.css";
import React from "react";
import profile from "../../img/profilepic.png";
import Button from "../../Ui/Buttons/Button";
import help1 from "../../img/help1.png"
import help2 from "../../img/help2.png"
import help3 from "../../img/help3.png"
import help4 from "../../img/help4.png"
import help5 from "../../img/help5.png"
import {motion} from 'framer-motion';
import {fade, pageAnimation} from '../../Ui/Animations'

const Main = () => {
  return (
    <div>
    <div className={classes.MainWrapper}>
      <div className={classes.MainContent}>
        <div className={classes.MainContentText}>
          <p>
            Профессиональная консультация от дипломированного психолога и
            преподавателя
          </p>
          <Button title="Оставить заявку" path="/contacts" />
        </div>
        <div className={classes.MainContentImage}>
          <img src={profile} alt=""></img>
        </div>
      </div>
    </div>
    <div>
      <h1 className={classes.MainContentTitle}>C чем я могу помочь?</h1>
      <div className={classes.MainContentCards}>
        <div className={classes.MainContentCard}>
        <img src={help1} alt=""></img>
        <div className={classes.MainContentCardText}><p>Трудности в отношениях с партнером, семьей, друзьями</p></div>
        </div>
        <div className={classes.MainContentCard}><img src={help2} alt=""></img>
        <div className={classes.MainContentCardText}><p>Проблемы в интимной сфере</p></div>
        </div>
        <div className={classes.MainContentCard}><img src={help3} alt=""></img>
        <div className={classes.MainContentCardText}><p>Низкая самооценка</p></div>
        </div>
        <div className={classes.MainContentCard}><img src={help4} alt=""></img>
        <div className={classes.MainContentCardText}><p>Потеря интереса к жизни, работе, учебе</p></div>
        </div>
        <div className={classes.MainContentCard}><img src={help5} alt=""></img>
        <div className={classes.MainContentCardText}><p>Невозможность понять себя, свои эмоции и мотивы поведения</p></div>
        </div>
      </div>
      <div className={classes.MainContentCardsTextWrapper}>
        
        
       

      </div>
</div>
</div>
  );
};
export default Main;
