import React from 'react';
import style from '../style/Components.module.scss';

export default function LastName() {
  return (
    <div className={style.row}>
      <p className={style.row__head}>Фамилия</p>
      <input
        type="text"
        name=""
        id=""
        className={style.row__inp}
        placeholder="Введите вашу фамилию"
      />
    </div>
  );
}
