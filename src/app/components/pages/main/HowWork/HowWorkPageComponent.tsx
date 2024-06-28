'use client';
import { useState } from 'react';
import style from './HowWorkPageComponent.module.scss';
import WorkInfo from './WorkInfo';
import { format } from './format';

export default function HowWorkPageComponent() {
  const [howWork, setHowWork] = useState(format[0]);
  return (
    <section className={style.how}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">
              Как это работает | Как записаться на сессию
            </h2>
          </div>
          <div className={style.how__options}>
            <button
              onClick={() => setHowWork(format[0])}
              className={
                howWork.type === 'ochno'
                  ? style.how__options__item_active
                  : style.how__options__item
              }
            >
              Очно
            </button>
            <button
              onClick={() => setHowWork(format[1])}
              className={
                howWork.type === 'online'
                  ? style.how__options__item_active
                  : style.how__options__item
              }
            >
              Онлайн
            </button>
            <button
              onClick={() => setHowWork(format[2])}
              className={
                howWork.type === 'texting'
                  ? style.how__options__item_active
                  : style.how__options__item
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
