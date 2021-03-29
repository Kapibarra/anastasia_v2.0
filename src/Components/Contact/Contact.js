import React from 'react'
import Button from '../../Ui/Buttons/Button'
import Input from '../../Ui/Input/Input'
import classes from "./Contact.module.css"

const Contact = () => {
    return(
        <div className={classes.ContactWrapper}>
            <div className={classes.ContactContent}>
<div className={classes.ContactText}>
<h1 className={classes.ContactTitle}>Будем на связи!</h1>
<h2 className={classes.ContactSubTitle}>Оставьте заявку и я пришлю Вам свободные даты для консультаций.</h2>
<p className={classes.ContactDescription}>Перед записью, ознакомьтесь с договором-офертой в PDF формате на оказание услуг по ссылке ниже.</p>
<Button path="" title="Договор"/>
</div>
<div className={classes.ContactForm}>
    <Input placeholder="Имя"/>
    <Input placeholder="+ 7 (999) 999-99-99"/>
    <Input placeholder="example@mail.com"/>
    <Input placeholder="Опишите проблему"/>
    <div className={classes.ButtonContactWrapper}>
            <Button path="/contacts" title="Отправить"></Button>
          </div>
</div>
            </div>
        </div>
    )
}
export default Contact