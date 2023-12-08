import React from 'react';
import style from './Main.module.scss';
import List from './components/List/List';
import Image from 'next/image';

export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.main__head}>
        <h2 className={style.main__head__title}>Курсы</h2>
        <Image
          src={'/img/icons/rest/filter.svg'}
          alt="filter"
          width={24}
          height={24}
          className={style.main__head__img}
        />
      </div>
      <div className={style.main__type}>
        <button className={style.main__type__btn_active}>Курсы</button>
        <button className={style.main__type__btn}>Ретриты</button>
        <button className={style.main__type__btn}>Семинары</button>
        <button className={style.main__type__btn}>Вебинары</button>
      </div>
      <div className={style.main__date}>
        <button className={style.main__date__btn_active}>предстоящие</button>
        <button className={style.main__date__btn}>Прошедшие</button>
      </div>
      <List />
    </div>
  );
}
