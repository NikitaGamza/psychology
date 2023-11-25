import React from 'react';
import style from './HowWork.module.scss';

export default function HowWork() {
  return (
    <div className={style.how}>
      <h2 className={style.how__head}>Как это работает</h2>
      <div className={style.how__list}>
        <div className={style.how__list__item}>
          <div className={style.how__list__item__idx}>1</div>
          <h5 className={style.how__list__item__title}>Оставляете заявку</h5>
          <p className={style.how__list__item__text}>
            Заполняете заявку и отправляете ее нам на одобрение
          </p>
        </div>
        <div className={style.how__list__line}></div>
        <div className={style.how__list__item}>
          <div className={style.how__list__item__idx}>2</div>
          <h5 className={style.how__list__item__title}>Проходите отбор</h5>
          <p className={style.how__list__item__text}>
            Общаетесь с нашим специалистом для подтверждения квалификации
          </p>
        </div>
        <div className={style.how__list__line}></div>
        <div className={style.how__list__item}>
          <div className={style.how__list__item__idx}>3</div>
          <h5 className={style.how__list__item__title}>Заполняете профиль</h5>
          <p className={style.how__list__item__text}>
            Получаете доступ к личному кабинету и заполняете профиль
          </p>
        </div>
        <div className={style.how__list__line}></div>
        <div className={style.how__list__item}>
          <div className={style.how__list__item__idx}>4</div>
          <h5 className={style.how__list__item__title}>Проводите сессии</h5>
          <p className={style.how__list__item__text}>
            Заполняете в календаре дни для работы и проводите сессии
          </p>
        </div>
      </div>
    </div>
  );
}
