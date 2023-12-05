import React, { useState } from 'react';
import Image from 'next/image';
import style from './Specialization.module.scss';
import { specList } from './specList';

interface ISpec {
  id: number;
  name: string;
  isSelected: boolean;
}

export default function Specialization() {
  const [visible, setVisible] = useState<boolean>(false);
  const [occupation, setOccupation] = useState(specList);

  return (
    <div className={style.spec}>
      <div className={style.spec__head}>
        <h5 className={style.spec__head__title}>Специализация</h5>
        <Image
          src={
            visible
              ? '/img/icons/arrows/arrow-up.svg'
              : '/img/icons/arrows/arrow-down.svg'
          }
          alt="arrow"
          width={24}
          height={24}
          onClick={() => setVisible(!visible)}
          className={style.spec__head__img}
        />
      </div>
      <div className={visible ? style.spec__visible : style.spec__notvisible}>
        {occupation.map((item: ISpec, idx: number) => (
          <span
            key={idx}
            className={
              item.isSelected
                ? style.spec__visible__item_selected
                : style.spec__visible__item
            }
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
