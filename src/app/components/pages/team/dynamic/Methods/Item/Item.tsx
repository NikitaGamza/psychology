import { useState } from 'react';
import style from './Item.module.scss';

export default function Item({ item }: any) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <span
        onMouseMove={() => setModal(true)}
        onMouseLeave={() => setModal(false)}
        className={style.item}
      >
        {item.name}
      </span>
      {modal && (
        <span className={style.modal}>
          <span className={style.modal__head}>{item.name} - </span>
          <span className={style.modal__desc}>{item.description}</span>
        </span>
      )}
    </>
  );
}
