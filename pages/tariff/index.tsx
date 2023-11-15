import React from 'react';
import style from './style/Tariff.module.scss';
import { tariffFilter } from './tariffFilter';
import TariffItem from '@/app/components/pages/tariff/TariffItem/TariffItem';
import Certificate from '@/app/components/pages/tariff/Certificate/Certificate';
import Questions from '@/app/components/pages/tariff/Questions/Questions';

export default function Tariff() {
  return (
    <div className={style.tariff}>
      <div className="container">
        <h1 className={style.tariff__head}>Тарифы</h1>
        <div className={style.tariff__list}>
          {tariffFilter.map((item) => (
            <TariffItem tariffFilter={item} />
          ))}
        </div>
      </div>
      <Certificate />
      <Questions />
    </div>
  );
}
