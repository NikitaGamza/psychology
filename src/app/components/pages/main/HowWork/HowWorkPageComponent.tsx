'use client';
import { useState, useEffect } from 'react';
import style from './HowWorkPageComponent.module.scss';
import WorkInfo from './WorkInfo';

export default function HowWorkPageComponent() {
  const workType = [
    {
      type: 'ochno',
      url: '/how-ochno.jpg',
      list: [
        'Выбираете психолога из каталога',
        'Выбираете время и место проведения сессии',
        'После записи к психологу в личном кабинете появится кнопка для оплаты сессии',
        'После успешной оплаты время бронируется. В назначенный день приезжаете на сессию к психологу',
        'Посещаете сессию, прислушиваетесь к советам психолога и становитесь лучшей версией себя!',
      ],
    },
    {
      type: 'online',
      url: '/online.jpg',
      list: [
        'Выбираете психолога из каталога',
        'Выбираете удобное время сессии',
        'После записи к психологу в личном кабинете появится кнопка для оплаты сессии',
        'После успешной оплаты время бронируется. За день до назначенной сессии в личном кабинете появится ссылка на видеоконференцию',
        'Посещаете сессию, прислушиваетесь к советам психолога и становитесь лучшей версией себя!',
      ],
    },
    {
      type: 'texting',
      url: '/texting.jpg',
      list: [
        'Выбираете психолога из каталога',
        'Выбираете удобное время сессии',
        'После записи к психологу в личном кабинете появится кнопка для оплаты сессии',
        'После успешной оплаты время бронируется. За день до назначенной сессии в личном кабинете появится ссылка на видеоконференцию',
        'Посещаете сессию, прислушиваетесь к советам психолога и становитесь лучшей версией себя!',
      ],
    },
  ];
  const [howWork, setHowWork] = useState(workType[0]);
  return (
    <section className={style.how}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Как это работает</h2>
          </div>
          <div className={style.how__options}>
            <button
              onClick={() => setHowWork(workType[0])}
              className={
                howWork.type === 'ochno'
                  ? 'button_sheer_active'
                  : 'button_sheer'
              }
            >
              Очно
            </button>
            <button
              onClick={() => setHowWork(workType[1])}
              className={
                howWork.type === 'online'
                  ? 'button_sheer_active'
                  : 'button_sheer'
              }
            >
              Онлайн
            </button>
            <button
              onClick={() => setHowWork(workType[2])}
              className={
                howWork.type === 'texting'
                  ? 'button_sheer_active'
                  : 'button_sheer'
              }
            >
              Переписка
            </button>
          </div>
          <WorkInfo howWork={howWork} />
        </div>
      </div>
    </section>
  );
}
