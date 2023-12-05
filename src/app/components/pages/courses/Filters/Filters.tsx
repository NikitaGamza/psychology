import React from 'react';
import style from './Filters.module.scss';
import Price from './components/Price/Price';
import Format from './components/Format/Format';

export default function Filters() {
  return (
    <div className={style.filt}>
      <h4 className={style.filt__head}>Параметры</h4>
      <div className={style.filt__list}>
        <Price />
        <Format />
      </div>
    </div>
  );
}
