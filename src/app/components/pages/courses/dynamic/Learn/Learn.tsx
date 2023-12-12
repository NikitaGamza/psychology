import React from 'react';
import style from './Learn.module.scss';
import Image from 'next/image';

interface IList {
  learn: Array<string>;
}

export default function Learn(props: IList) {
  const { learn } = props;
  return (
    <div className={style.learn}>
      <h2 className={style.learn__head}>Чему вы научитесь</h2>
      <div className={style.learn__content}>
        {learn &&
          learn.map((item: string, idx: number) => (
            <div key={idx} className={style.learn__content__item}>
              <Image
                src={'/img/pages/courses/dynamic/jackdaw.svg'}
                alt="jackdaw"
                width={80}
                height={80}
                className={style.learn__content__item__img}
              />
              <p className={style.learn__content__item__text}>{item}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
