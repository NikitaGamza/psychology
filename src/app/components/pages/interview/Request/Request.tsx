import React from 'react';
import style from './Request.module.scss';
import FirstName from './components/FirstName/FirstName';
import LastName from './components/LastName/LastName';
import Institute from './components/Institute/Institute';
import Qualification from './components/Qualification/Qualification';
import Speciality from './components/Specaility/Speciality';
import Retraining from './components/Retraining/Retraining';
import AddEducation from './components/AddEducation/AddEducation';
import Degree from './components/Degree/Degree';
import Copy from './components/Copy/Copy';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Email from './components/Email/Email';
import Phone from './components/Phone/Phone';
import Text from './components/Text/Text';

export default function Request() {
  return (
    <div className={style.req}>
      <h2 className={style.req__head}>Заявка на собеседование</h2>
      <div className={style.req__form}>
        <FirstName />
        <LastName />
        <Institute />
        <Speciality />
        <Qualification />
        <Retraining />
        <AddEducation />
        <Degree />
        <Copy />
        <Experience />
        <Work />
        <Email />
        <Phone />
        <Text />
        <button className={style.req__form__send}>Оставить заявку</button>
      </div>
    </div>
  );
}
