import React, { useState } from 'react';
import style from './Item.module.scss';
import Image from 'next/image';

export default function Item({ props }: any) {
  const { head, description } = props;
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={style.item} onClick={() => setVisible(!visible)}>
      <div className={style.item__head}>
        <span className={style.item__head__title}>{head}</span>
        <Image
          width={32}
          height={32}
          src={visible ? '/minus-close.svg' : '/plus-open.svg'}
          alt="close"
        />
      </div>
      {visible && <p className={style.item__description}>{description}</p>}
    </div>
  );
}
