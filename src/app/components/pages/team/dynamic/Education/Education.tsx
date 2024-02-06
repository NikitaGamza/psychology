import { useEffect, useLayoutEffect } from 'react';
import style from './Education.module.scss';
interface IEdu {
  university: string;
  degree: string;
  field?: string;
  year: number;
}
export default function Education({ props }: any) {
  return (
    <div className={style.edu}>
      <h5 className={style.edu__head}>Образование</h5>
      <ul className={style.edu__list}>
        {props.map((item: IEdu, idx: number) => (
          <li key={idx} className={style.edu__list__item}>
            {item.university} • {item.degree} •{' '}
            {item.field && `${item.field} • `} {item.year}
          </li>
        ))}
      </ul>
    </div>
  );
}
