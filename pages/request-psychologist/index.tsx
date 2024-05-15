import style from './Request.module.scss';
import Name from '@/app/components/pages/request-psychologist/Name/Name';
import WhoNeed from '@/app/components/pages/request-psychologist/WhoNeed/WhoNeed';
import Complaints from '@/app/components/pages/request-psychologist/Complaints/Complaints';
import Format from '@/app/components/pages/request-psychologist/Format/Format';
import City from '@/app/components/pages/request-psychologist/City/City';
import Sex from '@/app/components/pages/request-psychologist/Sex/Sex';
import Experience from '@/app/components/pages/request-psychologist/Experience/Experience';
import Time from '@/app/components/pages/request-psychologist/Time/Time';
import Phone from '@/app/components/pages/request-psychologist/Phone/Phone';
import Problem from '@/app/components/pages/request-psychologist/Problem/Problem';
import { useState, FormEvent } from 'react';
export default function RequestPsychologist() {
  const [name, setName] = useState<string>('');
  const [complains, setComplains] = useState<any>();
  const [need, setNeed] = useState<any>('me');
  const [format, setFormat] = useState<any>('online');
  const [city, setCity] = useState<any>('');
  const [sex, setSex] = useState<any>('мужчина');
  const [exp, setExp] = useState<any>('Неважно');
  const [time, setTime] = useState<any>('');
  const [data, setData] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const [problem, setProblem] = useState<any>('');
  async function recordPsychologist(
    e: FormEvent,
    name: string,
    complaint: any,
    WhoNeed: string,
    format: string,
    city: string,
    sex: string,
    experience: string,
    date: string,
    time: string,
    phone: string,
    problemDescribe: string
  ) {
    e.preventDefault();
    const subscribe = {
      data: {
        name: name,
        complaint: complaint,
        WhoNeed: WhoNeed,
        format: format,
        city: city,
        sex: sex,
        experience: experience,
        date: date,
        time: time,
        phone: phone,
        problemDescribe: problemDescribe,
      },
    };
    const sendData = await fetch(
      'http://77.232.128.234:1337/api/find-psychologists',
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
      <div className={style.req__container}>
        <h1 className={style.req__container__head}>
          Заявка на подбор психолога
        </h1>
        <Name setName={setName} />
        <Complaints complains={complains} setComplains={setComplains} />
        <WhoNeed setNeed={setNeed} />
        <Format setFormat={setFormat} />
        <City setCity={setCity} />
        <Sex setSex={setSex} />
        <Experience setExp={setExp} />
        <Time setData={setData} setTime={setTime} />
        <Phone setPhone={setPhone} />
        <Problem setProblem={setProblem} />
        <button
          onClick={(e) =>
            recordPsychologist(
              e,
              name,
              complains,
              need,
              format,
              city,
              sex,
              exp,
              data,
              time,
              phone,
              problem
            )
          }
          className={style.req__container__submit}
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
}
