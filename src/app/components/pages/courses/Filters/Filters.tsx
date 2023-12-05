import React from 'react';
import style from './Filters.module.scss';
import Price from './components/Price/Price';

export default function Filters() {
  return (
    <div className={style.filt}>
      <h4 className={style.filt__head}>Параметры</h4>
      <Price />
    </div>
  );
}
