import React from 'react'
import Button from '../../Ui/Buttons/Button'
import Input from '../../Ui/Input/Input'
import classes from "./Contact.module.css"
import Contract from '../../contract.docx'

function Contact()  {
    return(
        <div className={classes.ContactWrapper}>
            <div className={classes.ContactContent}>
<div className={classes.ContactText}>
<h1 className={classes.ContactTitle}>Будем на связи!</h1>
<h2 className={classes.ContactSubTitle}>Оставьте заявку и я пришлю Вам свободные даты для консультаций.</h2>
<p className={classes.ContactDescription}>Перед записью, ознакомьтесь с договором-офертой в PDF формате на оказание услуг по ссылке ниже.</p>
<a href={Contract} title="Договор" download target="_blank">
<button className={classes.Button}>
        Договор
        </button>
        </a>
</div>
<div className={classes.ContactForm}>
<form action="https://formspree.io/xvowyvgl" method="POST">
    <Input name="name" placeholder="Имя"/>
    <Input name="phone" placeholder="+ 7 (999) 999-99-99"/>
    <Input name="email" placeholder="example@mail.com"/>
    <Input  name="description" placeholder="Опишите проблему"/>
    <div className={classes.ButtonContactWrapper}>
            <button className={classes.Button} title="Отправить" type="submit">Отправить</button>
          </div>
          </form>
</div>
            </div>
        </div>
    )
}
export default Contact