import React, { useEffect } from 'react';
import style from './Experience.module.scss';
interface IExp {
  workPlace: string;
  specialization: string;
  startYear: number;
  endYear: number;
}
export default function Experience({ props }: any) {
  return (
    <div className={style.exp}>
      <h5 className={style.exp__head}>Опыт работы</h5>
      <ul className={style.exp__list}>
        {props?.map((item: IExp, idx: number) => (
          <li key={idx} className={style.exp__list__item}>
            {item.workPlace} • {item.specialization} • {item.startYear}-
            {item.endYear}
          </li>
        ))}
      </ul>
    </div>
  );
}
