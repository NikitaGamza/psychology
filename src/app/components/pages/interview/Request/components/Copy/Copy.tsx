import React from 'react';
import style from '../style/Components.module.scss';

export default function Copy() {
  return (
    <div className={style.row}>
      <p className={style.row__head}>Копии дипломов и сертификатов</p>
      <div className={style.row__uploader}>
        <button className={style.row__uploader__btn}>+</button>
        <p className={style.row__uploader__text}>Прикрепить документ</p>
      </div>
    </div>
  );
}
