import React from 'react';
import style from './docs.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Docs() {
  return (
    <div className={style.doc}>
      <div className="container">
        <Link href={'/'} className={style.doc__back}>
          <Image
            src={'/img/icons/arrows/arrow-left-green.svg'}
            alt="back"
            width={10}
            height={7}
            className={style.doc__back__arrow}
          />
          Назад
        </Link>
        <div className={style.doc__content}>
          <h2 className={style.doc__content__head}>Юридические документы</h2>
          <div className={style.doc__content__list}>
            <Link href={'/'} className={style.doc__content__list__item}>
              Лицензия на использование цифровой платформы
            </Link>
            <Link href={'/'} className={style.doc__content__list__item}>
              Лицензионное соглашение об условиях использования
              пользовательского контента
            </Link>
            <Link
              href={'/docs/privacy'}
              className={style.doc__content__list__item}
            >
              Политика конфиденциальности и обработки персональных данных
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
