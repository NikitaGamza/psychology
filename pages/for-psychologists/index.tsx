import React from 'react';
import style from './For.module.scss';
import Cover from '@/app/components/pages/for-psychologists/Cover/Cover';
import Offer from '@/app/components/pages/for-psychologists/Offer/Offer';
import HowWork from '@/app/components/pages/for-psychologists/HowWork/HowWork';
import Requirements from '@/app/components/pages/for-psychologists/Requirements/Requirements';
import Banner from '@/app/components/pages/for-psychologists/Banner/Banner';

export default function ForPsychologists() {
  return (
    <div className="container">
      <div className={style.for}>
        <Cover />
        <Offer />
        <HowWork />
        <Requirements />
        <Banner />
      </div>
    </div>
  );
}
