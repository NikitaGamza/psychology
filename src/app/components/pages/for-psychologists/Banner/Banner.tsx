import React from 'react';
import style from './Banner.module.scss';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className={style.ban}>
      <h2 className={style.ban__head}>Присоединяйтесь к нам!</h2>
      <h2 className={style.ban__head}>какой то текст</h2>
      <Link href={'/'} className={style.ban__link}>
        Оставить заявку
      </Link>
    </div>
  );
}
