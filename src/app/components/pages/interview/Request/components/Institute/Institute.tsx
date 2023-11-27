import React from 'react';
import style from '../style/Components.module.scss';

export default function Institute() {
  return (
    <div className={style.row}>
      <p className={style.row__head}>Название учебного заведения</p>
      <input
        type="text"
        name=""
        id=""
        className={style.row__inp}
        placeholder="Введите название учебного заведения"
      />
    </div>
  );
}
