import React from 'react';
import style from './style/ForOrganizations.module.scss';
import Cover from '@/app/components/pages/for-organizations/Cover/Cover';

export default function ForOrganizations() {
  return (
    <div className={style.for}>
      <div className="container">
        <Cover />
      </div>
    </div>
  );
}
