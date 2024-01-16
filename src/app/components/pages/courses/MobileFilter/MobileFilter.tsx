import React from 'react';
import style from './MobileFilter.module.scss';
import Price from '../Filters/components/Price/Price';
import Format from '../Filters/components/Format/Format';
import Specialization from '../Filters/components/Specialization/Specialization';

export default function MobileFilter({ setMobileFilt, mobileFilt }: any) {
  return (
    <div className={style.mob}>
      <div className={style.mob__head}>
        <h1
          className={style.mob__head__closer}
          onClick={() => setMobileFilt(!mobileFilt)}
        >
          Фильтры
        </h1>
        <h1 className={style.mob__head__refresh}>Сбросить всё</h1>
      </div>
      <div className={style.mob__content}>
        <Price />
        <Format />
        <Specialization />
      </div>
    </div>
  );
}
