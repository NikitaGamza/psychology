import React from 'react';
import style from './For.module.scss';
import Cover from '@/app/components/pages/for-psychologists/Cover/Cover';

export default function ForPsychologists() {
  return (
    <div className="container">
      <div className={style.for}>
        <Cover />
      </div>
    </div>
  );
}
