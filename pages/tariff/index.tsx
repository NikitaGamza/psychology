import React, { useState, useEffect } from 'react';
import style from './style/Tariff.module.scss';
import TariffItem from '@/app/components/pages/tariff/TariffItem/TariffItem';
import Certificate from '@/app/components/pages/tariff/Certificate/Certificate';
import Questions from '@/app/components/pages/tariff/Questions/Questions';
const tariffFilter = [
  {
    therapy: 'oneByOne',
    therapyName: 'Один на один',
    format: ['Очно', 'Онлайн', 'Переписка'],
  },
  {
    therapy: 'family',
    therapyName: 'Семейный',
    format: ['Очно', 'Онлайн'],
  },
  {
    therapy: 'kid',
    therapyName: 'С ребёнком',
    format: ['Очно', 'Онлайн'],
  },
];
export default function Tariff() {
  return (
    <div className={style.tariff}>
      <div className="container">
        <h1 className={style.tariff__head}>Тарифы</h1>
        <div className={style.tariff__list}>
          {tariffFilter.map((item: any, idx: number) => (
            <TariffItem key={idx} tariffFilter={item} />
          ))}
        </div>
      </div>
      <Certificate />
      <Questions />
      {/* сделать модальный окна */}
    </div>
  );
}
