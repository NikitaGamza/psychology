import React, { useState } from 'react';
import style from './Item.module.scss';

export default function Item({ props }: any) {
  const { head, description } = props;
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={style.item} onClick={() => setVisible(!visible)}>
      <div className={style.item__head}>
        <span className={style.item__head__title}>{head}</span>
        <button
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
