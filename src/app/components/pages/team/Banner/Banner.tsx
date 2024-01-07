import React from 'react';
import style from './Banner.module.scss';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className={style.ban}>
      <div className={style.ban__info}>
        <h2 className={style.ban__info__head}>
          Не нашли подходящего психолога?
        </h2>
        <p className={style.ban__info__text}>
          Оставьте заявку на подбор нашим специалистам
        </p>
        <Link className={style.ban__info__link} href={'/request-psychologist'}>
          Подобрать психолога
        </Link>
      </div>
    </div>
  );
}
