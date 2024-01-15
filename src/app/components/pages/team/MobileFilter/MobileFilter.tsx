import React from 'react';
import style from './MobileFilter.module.scss';
import Sex from '../Parameters/components/Sex/Sex';
import Speciality from '../Parameters/components/Speciality/Speciality';
import Methods from '../Parameters/components/Methods/Methods';
import Experience from '../Parameters/components/Experience/Experience';
import Cities from '../Parameters/components/Cities/Cities';
import Format from '../Parameters/components/Format/Format';

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
        <Speciality />
        <Methods />
        <Experience />
        <Cities />
        <Format />
        <Sex />
      </div>
    </div>
  );
}
