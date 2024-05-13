import React, { useState } from 'react';
import style from './MobileFilter.module.scss';
import Sex from '../Parameters/components/Sex/Sex';
import Speciality from '../Parameters/components/Speciality/Speciality';
import Methods from '../Parameters/components/Methods/Methods';
import Experience from '../Parameters/components/Experience/Experience';
import Cities from '../Parameters/components/Cities/Cities';
import Format from '../Parameters/components/Format/Format';
import Image from 'next/image';

export default function MobileFilter({ setMobileFilt, mobileFilt }: any) {
  const [refresh, setRefresh] = useState<boolean>(false);
  return (
    <div className={style.mob}>
      <div className={style.mob__head}>
        <div
          className={style.mob__head__closer}
          onClick={() => setMobileFilt(!mobileFilt)}
        >
          <Image
            src={'/img/icons/rest/cross.svg'}
            alt="close"
            width={24}
            height={24}
            className={style.mob__head__closer__cross}
          />
          <h1 className={style.mob__head__closer__text}>Фильтры</h1>
        </div>
        <h1
          className={style.mob__head__refresh}
          onClick={() => setRefresh(!refresh)}
        >
          Сбросить всё
        </h1>
      </div>
      <div className={style.mob__content}>
        <Speciality refresh={refresh}/>
        <Methods />
        <Experience />
        <Cities />
        <Format />
        <Sex />
      </div>
    </div>
  );
}
