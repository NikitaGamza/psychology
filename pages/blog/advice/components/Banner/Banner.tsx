import React from 'react';
import style from './Banner.module.scss';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className={style.ban}>
      <div className={style.ban__info}>
        <h3 className={style.ban__info__head}>
          Готовы побороть себя <br className={style.ban__info__head_br} />и
          обратиться за помощью?
        </h3>
        <p className={style.ban__info__text}>
          Не переживайте, страхи, опасения, неуверенность и сомнения — это
          нормально.
        </p>
        <Link className={style.ban__info__link} href={'/team'}>
          Найти психолога
        </Link>
      </div>
    </div>
  );
}
