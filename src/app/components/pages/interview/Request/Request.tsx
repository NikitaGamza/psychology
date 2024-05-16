import React, { FormEvent, useState } from 'react';
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
  const [firstName, setFirstName] = useState<string>('');
  const [files, setFiles] = useState<any>();
  async function recordInterview(e: FormEvent, firstName: string, files: any) {
    e.preventDefault();
    const subscribe = {
      data: {
        firstName: firstName,
        files: files,
      },
    };
    const sendData = await fetch(
      'http://localhost:1337/api/record-interviews',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscribe),
      }
    );
    const sendResponse = await sendData.json();
    // setRecord(false);
    // setModal(true);
  }
  return (
    <div className={style.req}>
      <h2 className={style.req__head}>Заявка на собеседование</h2>
      <div className={style.req__form}>
        <FirstName setFirstName={setFirstName} />
        <LastName />
        <Institute />
        <Speciality />
        <Qualification />
        <Retraining />
        <AddEducation />
        <Degree />
        <Copy setFiles={setFiles} />
        <Experience />
        <Work />
        <Email />
        <Phone />
        <Text />
        <button
          className={style.req__form__send}
          onClick={(e) => {
            console.log(files);
            // recordInterview(e, firstName, files);
          }}
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
}
