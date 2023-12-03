import React from 'react';
import style from './Courses.module.scss';
import Main from '@/app/components/pages/courses/Main/Main';
import Filters from '@/app/components/pages/courses/Filters/Filters';

export default function Courses() {
  return (
    <div className={style.course}>
      <div className="container">
        <div className={style.course__content}>
          <Main />
          <Filters />
        </div>
      </div>
    </div>
  );
}
