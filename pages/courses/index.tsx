import React, { useState } from 'react';
import style from './Courses.module.scss';
import Main from '@/app/components/pages/courses/Main/Main';
import Filters from '@/app/components/pages/courses/Filters/Filters';
import Image from 'next/image';
import MobileFilter from '@/app/components/pages/courses/MobileFilter/MobileFilter';

export default function Courses() {
  const [mobileFilt, setMobileFilt] = useState<boolean>(false);
  return (
    <div className={style.course}>
      {mobileFilt && (
        <MobileFilter setMobileFilt={setMobileFilt} mobileFilt={mobileFilt} />
      )}
      <div className="container">
        <h2 className={style.course__head}>Курсы</h2>
        <div className={style.course__head_mob}>
          <h2 className={style.course__head_mob__title}>Курсы</h2>
          <Image
            src={'/img/icons/rest/filt.svg'}
            alt=""
            width={24}
            height={24}
            onClick={() => setMobileFilt(!mobileFilt)}
          />
        </div>
        <div className={style.course__content}>
          <Main />
          <Filters />
        </div>
      </div>
    </div>
  );
}
