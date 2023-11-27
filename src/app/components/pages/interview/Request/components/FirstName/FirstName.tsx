import React from 'react';
import style from '../style/Components.module.scss';

export default function FirstName() {
  return (
    <div className={style.row}>
      <p className={style.row__head}>Имя</p>
      <input
        type="text"
        name=""
        id=""
        className={style.row__inp}
        placeholder="Введите ваше имя"
      />
    </div>
  );
}
