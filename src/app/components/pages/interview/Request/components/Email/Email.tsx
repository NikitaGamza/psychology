import React from 'react';
import style from '../style/Components.module.scss';

export default function Email() {
  return (
    <div className={style.row}>
      <p className={style.row__head}>Электронная почта</p>
      <input
        type="text"
        name=""
        id=""
        className={style.row__inp}
        placeholder="Введите вашу почту"
      />
    </div>
  );
}
