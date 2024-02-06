import React from 'react';
import style from './Specialization.module.scss';

export default function Specialization({ props }: any) {
  return (
    <div className={style.spec}>
      <h5 className={style.spec__head}>Специализация</h5>
      <div className={style.spec__list}>
        {props.map((item: any) => (
          <span key={item.id} className={style.spec__list__item}>
            {item.attributes.themeName}
          </span>
        ))}
      </div>
    </div>
  );
}
