import classes from "./Main.module.css";
import React from "react";
import profile from "../../img/profilepic.png";
import Button from "../../Ui/Buttons/Button";
import help1 from "../../img/help1.png";
import help2 from "../../img/help2.png";
import help3 from "../../img/help3.png";
import help4 from "../../img/help4.png";
import help5 from "../../img/help5.png";
import { motion } from "framer-motion";
import {
  fade,
  lineAnim,
  pageAnimation,
  photoAnim,
  titleAnim,
} from "../../Ui/Animations";

const Main = () => {
  return (
    <div>
      <div className={classes.MainWrapper}>
        <div className={classes.MainContent}>
          <div className={classes.MainContentText}>
            <motion.p
              variants={titleAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              Профессиональная консультация от дипломированного психолога и
              преподавателя
            </motion.p>
            <Button title="Оставить заявку" path="/contacts" />
          </div>
          <motion.div
            className={classes.MainContentImage}
            variants={photoAnim}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <img src={profile} alt=""></img>
          </motion.div>
        </div>
      </div>
      <div>
        <motion.h1
          className={classes.MainContentTitle}
          variants={titleAnim}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          C чем я могу помочь?
        </motion.h1>
        <div className={classes.MainContentCards}>
          <motion.div className={classes.MainContentCard}  variants={photoAnim}
            initial="hidden"
            animate="show"
            exit="exit">
            <img src={help1} alt=""></img>
            <div className={classes.MainContentCardText}>
              <p>Трудности в отношениях с партнером, семьей, друзьями</p>
            </div>
          </motion.div>
          <motion.div className={classes.MainContentCard}  variants={photoAnim}
            initial="hidden"
            animate="show"
            exit="exit">
            <img src={help2} alt=""></img>
            <div className={classes.MainContentCardText}>
              <p>Проблемы в интимной сфере</p>
            </div>
          </motion.div>
          <motion.div className={classes.MainContentCard}  variants={photoAnim}
            initial="hidden"
            animate="show"
            exit="exit">
            <img src={help3} alt=""></img>
            <div className={classes.MainContentCardText}>
              <p>Низкая самооценка</p>
            </div>
          </motion.div>
          <motion.div className={classes.MainContentCard}  variants={photoAnim}
            initial="hidden"
            animate="show"
            exit="exit">
            <img src={help4} alt=""></img>
            <div className={classes.MainContentCardText}>
              <p>Потеря интереса к жизни, работе, учебе</p>
            </div>
          </motion.div>
          <motion.div className={classes.MainContentCard}  variants={photoAnim}
            initial="hidden"
            animate="show"
            exit="exit">
            <img src={help5} alt=""></img>
            <div className={classes.MainContentCardText}>
              <p>Невозможность понять себя, свои эмоции и мотивы поведения</p>
            </div>
          </motion.div>
        </div>
        <div className={classes.MainContentCardsTextWrapper}></div>
      </div>
    </div>
  );
};
export default Main;
