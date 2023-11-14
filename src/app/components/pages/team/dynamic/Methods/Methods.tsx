import React from 'react';
import style from './Methods.module.scss';
import Item from './Item/Item';

export default function Methods({ props }: any) {
  return (
    <div className={style.meth}>
      <h5 className={style.meth__head}>Методы и подходы</h5>
      <div className={style.meth__list}>
        {props.map((item: any, idx: number) => (
          <Item key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
