import React from 'react';
import style from './style/StartWork.module.scss';

export default function StartWork() {
  return (
    <div className={style.start}>
      <h2 className={style.start__head}>Как начать с нами работать</h2>
      <div className={style.start__list}>
        <div className={style.start__list__item}>
          <div className={style.start__list__item__idx}>1</div>
          <h5 className={style.start__list__item__title}>Оставляете заявку</h5>
          <p className={style.start__list__item__text}>
            Заполняете заявку и отправляете ее нам на одобрение
          </p>
        </div>
        <div className={style.start__list__line}></div>
        <div className={style.start__list__item}>
          <div className={style.start__list__item__idx}>2</div>
          <h5 className={style.start__list__item__title}>Проходите отбор</h5>
          <p className={style.start__list__item__text}>
            Общаетесь с нашим специалистом для подтверждения квалификации
          </p>
        </div>
        <div className={style.start__list__line}></div>
        <div className={style.start__list__item}>
          <div className={style.start__list__item__idx}>3</div>
          <h5 className={style.start__list__item__title}>Заполняете профиль</h5>
          <p className={style.start__list__item__text}>
            Получаете доступ к личному кабинету и заполняете профиль
          </p>
        </div>
      </div>
    </div>
  );
}
