import React from 'react';
import style from './style/Interview.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Request from '@/app/components/pages/interview/Request/Request';

export default function Interview() {
  return (
    <div className="container">
      <div className={style.inter}>
        <Link href={'/for-psychologists'} className={style.inter__back}>
          <Image
            src={'/img/icons/arrows/arrow-left-green.svg'}
            alt="arrow"
            width={10}
            height={7}
            className={style.inter__back__arrow}
          />
          Назад
        </Link>
        <Request />
      </div>
    </div>
  );
}
