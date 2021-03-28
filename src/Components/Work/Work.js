import classes from "./Work.module.css";
import React from "react";
import Button from "../../Ui/Buttons/Button";
import image1 from "../../img/workimg1.png";
import image2 from "../../img/workimg2.png";

const Work = () => {
  return (
    <div className={classes.WorkWrapper}>
      <div className={classes.WorkContent}>
        <div className={classes.WorkContentItem}>
          <img src={image1}></img>
          <div className={classes.WorkContentText}>
            <h1 className={classes.WorkContentTextTitle}>
              Онлайн консультация
            </h1>
            <p>
              Индивидуальная работа на личном приеме в городе Москва, в пределах
              ТТК. Идеальная возможность применить различные методики для
              эффективной проработки вашего запроса : символдрама,
              метафорические карты, и другие. Приём проходит в уютном кабинете,
              в центральной части города . Продолжительность сеанса - 60 минут .
              Oзнакомьтесь, пожалуйста, с договором-офертой на оказание услуг
              психологического консультирования.
            </p>
          </div>
          <div className={classes.ButtonWorkWrapper}>
            <Button path="/contacts" title="1500 RUB"></Button>
          </div>
        </div>
        <div className={classes.WorkContentItem}>
          <img src={image2}></img>
          <div className={classes.WorkContentText}>
            <h1 className={classes.WorkContentTextTitle}>Личный прием</h1>
            <p>
              Индивидуальная работа на личном приеме в городе Москва, в пределах
              ТТК. Идеальная возможность применить различные методики для
              эффективной проработки вашего запроса : символдрама,
              метафорические карты, и другие. Приём проходит в уютном кабинете,
              в центральной части города . Продолжительность сеанса - 60 минут .
              Oзнакомьтесь, пожалуйста, с договором-офертой на оказание услуг
              психологического консультирования.
            </p>
          </div>
          <div className={classes.ButtonWorkWrapper}>
            <Button path="/contacts" title="2500 RUB"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
