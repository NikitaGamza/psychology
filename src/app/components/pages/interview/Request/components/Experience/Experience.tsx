import React from 'react';
import style from '../style/Components.module.scss';

export default function Experience() {
  return (
    <div className={style.row}>
      <p className={style.row__head}>Опыт работы</p>
      <input
        type="number"
        name=""
        id=""
        className={style.row__inp}
        placeholder="Количество лет"
      />
    </div>
  );
}
