import React from 'react';
import style from './style/Cover.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Cover() {
  return (
    <div className={style.cover}>
      <div className={style.cover__info}>
        <h1 className={style.cover__info__head}>
          Поможем вашим сотрудникам быть{' '}
          <span className={style.cover__info__head_deco}>продуктивными!</span>{' '}
        </h1>
        <p className={style.cover__info__text}>
          Если помощь людям - твоё призвание, мы всегда будем рады видеть тебя в
          команде!
        </p>
        <Image
          width={667}
          height={643}
          src={'/img/pages/for-organizations/Cover/cover.png'}
          alt="cover"
          className={style.cover__img_mobile}
        />
        <Link href={'/'} className={style.cover__info__link}>
          Оставить заявку
        </Link>
      </div>
      <Image
        width={667}
        height={643}
        src={'/img/pages/for-organizations/Cover/cover.png'}
        alt="cover"
        className={style.cover__img}
      />
    </div>
  );
}
