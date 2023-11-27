import React from 'react';
import style from './style/ForOrganizations.module.scss';
import Cover from '@/app/components/pages/for-organizations/Cover/Cover';
import Benefits from '@/app/components/pages/for-organizations/Benefits/Benefits';

export default function ForOrganizations() {
  return (
    <div className={style.for}>
      <div className="container">
        <div className={style.for__list}>
          <Cover />
          <Benefits />
        </div>
      </div>
    </div>
  );
}
