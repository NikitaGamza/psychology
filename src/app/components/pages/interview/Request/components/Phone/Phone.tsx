import React from 'react';
import style from '../style/Components.module.scss';

export default function Phone() {
  return (
    <div className={style.row}>
      <p className={style.row__head}>Контактный телефон</p>
      <input
        type="text"
        name=""
        id=""
        className={style.row__inp}
        placeholder="+7 (___) ___ - __ - __"
      />
    </div>
  );
}
