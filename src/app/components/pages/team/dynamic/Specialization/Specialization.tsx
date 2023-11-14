import React from 'react';
import style from './Specialization.module.scss';

export default function Specialization({ props }: any) {
  return (
    <div className={style.spec}>
      <h5 className={style.spec__head}>Специализоция</h5>
      <div className={style.spec__list}>
        {props.map((item: string, idx: number) => (
          <span key={idx} className={style.spec__list__item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
