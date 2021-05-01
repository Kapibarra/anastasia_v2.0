import React from "react";
import Button from "../../Ui/Buttons/Button";
import Input from "../../Ui/Input/Input";
import classes from "./Contact.module.css";
import Contract from "../../contract.docx";

function Contact() {
function onChangeHandler() {
    document.getElementById('mc-embedded-subscribe').disabled = !this.checked
}
  return (
    <div className={classes.ContactWrapper}>
      <div className={classes.ContactContent}>
        <div className={classes.ContactText}>
          <h1 className={classes.ContactTitle}>Будем на связи!</h1>
          <h2 className={classes.ContactSubTitle}>
            Оставьте заявку и я пришлю Вам свободные даты для консультаций.
          </h2>
          <p className={classes.ContactDescription}>
            Перед записью, ознакомьтесь с договором-офертой в PDF формате на
            оказание услуг по ссылке ниже.
          </p>
          <a href={Contract} title="Договор" download target="_blank">
            <button className={classes.Button}>Договор</button>
          </a>
        </div>
        <div className={classes.ContactForm}>
          <form action="https://formspree.io/xvowyvgl" method="POST">
            <Input name="name" placeholder="Имя" />
            <Input name="phone" placeholder="+ 7 (999) 999-99-99" />
            <Input name="email" placeholder="example@mail.com" />
            <Input name="description" placeholder="Опишите проблему" />
            <label>
              <input
                type="checkbox"
                name="accept"
                onСhange={onChangeHandler}
              />{" "}
              Я ознакомлен(-а) с{" "}
              <a href="http://site.ru/privacy/" target="_blank">
                Политикой конфиденциальности
              </a>
            </label>
            <input
              type="submit"
              value="Отправить"
              name="subscribe"
              id="mc-embedded-subscribe"
              disabled
              className={classes.Button}
            ></input>
            <div className={classes.ButtonContactWrapper}>
              <button
                className={classes.Button}
                title="Отправить"
                type="submit"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
