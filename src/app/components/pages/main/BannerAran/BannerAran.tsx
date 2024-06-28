import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';

export default function BannerAran() {
  return (
    <div className="container">
      <div className={style.ban}>
        <div className={style.ban__info}>
          <Image
            src={'/img/pages/main/Banner/Bek.png'}
            alt="Aaron Bek"
            width={100}
            height={100}
            className={style.ban__info__img}
          />
          <h1 className={style.ban__info__head}>
            «Людей беспокоят не вещи, а их взгляд на них»
          </h1>
          <p className={style.ban__info__text}>Аарон Бек</p>
        </div>
      </div>
    </div>
  );
}
