import React from 'react';
import style from '../style/Components.module.scss';

export default function Speciality() {
  return (
    <div className={style.row_multi}>
      <div className={style.row}>
        <p className={style.row__head}>Специальность</p>
        <input
          type="text"
          name=""
          id=""
          className={style.row__inp_spec}
          placeholder="Специальность"
        />
      </div>
      <div className={style.row}>
        <p className={style.row__head}>Год окончания</p>
        <input
          type="text"
          name=""
          id=""
          className={style.row__inp_year}
          placeholder="Год окончания"
        />
      </div>
    </div>
  );
}
