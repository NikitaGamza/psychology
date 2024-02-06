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
        {item.attributes.name},
      </span>
      {modal && (
        <span className={style.modal}>
          <span className={style.modal__head}>{item.attributes.name} - </span>
          <span className={style.modal__desc}>
            {item.attributes.description}
          </span>
        </span>
      )}
    </>
  );
}
