import React, { useState } from 'react';
import style from './Item.module.scss';

export default function Item({ props }: any) {
  const { head, description } = props;
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={style.item}>
      <div className={style.item__head}>
        <h1 className={style.item__head__title}>{head}</h1>
        <button
          onClick={() => setVisible(!visible)}
          className={
            visible
              ? style.item__head__btn_visible
              : style.item__head__btn_invisible
          }
        >
          {visible ? '-' : '+'}
        </button>
      </div>
      {visible && <p className={style.item__description}>{description}</p>}
    </div>
  );
}
