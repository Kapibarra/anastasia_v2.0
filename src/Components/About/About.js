import React, { Fragment } from 'react'
import classes from './About.module.css'
import aboutimg from '../../img/aboutlogo.png'
import SimpleSlider from '../../Ui/Slider/Slider'

const About = () => {
    return (
        <Fragment >
<div className={classes.AboutWrapper}>
<div className={classes.AboutContent}>
    <div className={classes.AboutText}>
    <h1 className={classes.AboutTitle}>Обо мне</h1>
    Привет, я - Ростошинская Анастасия. Специалист-психолог, преподаватель кафедры "Психологии и педагогики" в Гуманитарном институте (г.Москва).
<br />
<br />
Буду полезна, если Вы хотите понять и полюбить себя, обрести уверенность научиться справляться с вашими эмоциями, найти выход из постоянно повторяющихся неприятных ситуаций, улучшить сексуальную жизнь, избавиться и заменить негативные установки, поступки и мысли.
<br />
<br />
Моя основная цель – помочь Вам обрести контроль над своей жизнью и научиться справляться с жизненными трудностями и без психолога. Надеюсь, я буду вам полезна в достижении жизненной гармонии.</div>
    <div className={classes.AboutImage}><img src={aboutimg}></img></div>
    </div>

</div>
<div className={classes.SliderWrapper}>
<SimpleSlider />
</div>
</Fragment>
    )
}

export default About