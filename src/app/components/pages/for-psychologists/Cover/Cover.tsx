import React from 'react';
import style from './Cover.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Cover() {
  return (
    <div className={style.cover}>
      <div className={style.cover__info}>
        <h1 className={style.cover__info__head}>
          Присоединяйтесь к сообществу{' '}
          <span className={style.cover__info__head_green}>профессионалов!</span>
        </h1>
        <p className={style.cover__info__text}>
          Если помощь людям - твоё призвание, мы всегда будем рады видеть тебя в
          команде!
        </p>
        <Link href={'/hr'} className={style.cover__info__req}>
          Оставить заявку
        </Link>
      </div>
      <Image
        src={'/img/pages/for-psychologists/cover.png'}
        alt="cover"
        width={656}
        height={675}
        className={style.cover__img}
      />
      <Link href={'/hr'} className={style.cover__info__req_mobile}>
        Оставить заявку
      </Link>
    </div>
  );
}
