import React, { useState } from 'react';
import Image from 'next/image';
import style from './Format.module.scss';

export default function Format() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={style.form}>
      <div className={style.form__head}>
        <h5 className={style.form__head__title}>Формат курса</h5>
        <Image
          src={
            visible
              ? '/img/icons/arrows/arrow-up.svg'
              : '/img/icons/arrows/arrow-down.svg'
          }
          alt="arrow"
          width={24}
          height={24}
          onClick={() => setVisible(!visible)}
          className={style.form__head__img}
        />
      </div>
      <div className={visible ? style.form__visible : style.form__notvisible}>
        <div className={style.form__visible__item}>
          <input type="radio" name="format" id="format-1" />
          <label
            htmlFor="format-1"
            className={style.form__visible__item__label}
          >
            Очно
          </label>
        </div>
        <div className={style.form__visible__item}>
          <input type="radio" name="format" id="format-2" />
          <label
            htmlFor="format-2"
            className={style.form__visible__item__label}
          >
            Онлайн
          </label>
        </div>
        <div className={style.form__visible__item}>
          <input type="radio" name="format" id="format-3" />
          <label
            htmlFor="format-3"
            className={style.form__visible__item__label}
          >
            Неважно
          </label>
        </div>
      </div>
    </div>
  );
}
