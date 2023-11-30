import React from 'react';
import style from './not.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className={style.not}>
      <div className="container">
        <div className={style.not__content}>
          <div className={style.not__content__info}>
            <h2 className={style.not__content__info__head}>
              Такой страницы нет
            </h2>
            <p className={style.not__content__info__text}>
              Ссылка, по которой вы перешли, никуда не ведет. Возможно, в ней
              была опечатка, или эта страница была удалена.
            </p>
            <Link href={'/'} className={style.not__content__info__link}>
              Перейти на главную
            </Link>
          </div>
          <Image
            src={'/img/pages/404/cat.png'}
            alt="cat"
            width={600}
            height={319}
            className={style.not__content__img}
          />
        </div>
      </div>
    </div>
  );
}
