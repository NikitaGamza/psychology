import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/features/themes/themes';

export default function Themes() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const themes = useSelector((state: any) => state.themes.themes);
  useEffect(() => {
    console.log(themes);
  });
  //   const dispatch = useDispatch();
  return (
    <div className={style.block}>
      <div
        className={style.block__head}
        onClick={() => setIsVisible(!isVisible)}
      >
        <h6 className={style.block__head__title}>Специализация</h6>
        <Image
          src={
            isVisible
              ? '/img/pages/team/arrow-up.svg'
              : '/img/pages/team/arrow-down.svg'
          }
          alt="arrow"
          width={24}
          height={24}
          className={style.block__head__arrow}
        />
      </div>
      {/* <div className={isVisible ? style.block__list : style.none}>
        {themes.map((item: any, idx: number) => (
          <button
            key={idx}
            className={
              item.isSelected
                ? style.block__list__item_active
                : style.block__list__item
            }
            onClick={() => dispatch(toggle(item.id))}
          >
            {item.id}
          </button>
        ))}
      </div> */}
    </div>
  );
}
