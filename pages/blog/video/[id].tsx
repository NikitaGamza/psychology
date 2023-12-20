import React from 'react';
import BlogLayout from '../layout';
import style from './Detail.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function VideoDetail() {
  return (
    <BlogLayout>
      <div className={style.det}>
        <Link href={'/blog/advice'} className={style.det__back}>
          <Image
            src={'/img/icons/arrows/arrow-left-green.svg'}
            alt="back"
            width={10}
            height={7}
            className={style.det__back__img}
          />
          <span className={style.det__back__text}>Назад</span>
        </Link>
      </div>
    </BlogLayout>
  );
}
