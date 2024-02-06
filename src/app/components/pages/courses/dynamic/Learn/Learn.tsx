import React, { useEffect } from 'react';
import style from './Learn.module.scss';
import Image from 'next/image';

export default function Learn(props: any) {
  const { learn } = props;
  return (
    <div className={style.learn}>
      <h2 className={style.learn__head}>Чему вы научитесь</h2>
      <div className={style.learn__content}>
        {learn &&
          learn.map((item: any) => (
            <div key={item.id} className={style.learn__content__item}>
              <Image
                src={'/img/pages/courses/dynamic/jackdaw.svg'}
                alt="jackdaw"
                width={80}
                height={80}
                className={style.learn__content__item__img}
              />
              <p className={style.learn__content__item__text}>
                {item.learnText}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
