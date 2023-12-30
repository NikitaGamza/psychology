import React, { useState } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/features/blogThemesSlice';

export default function Speciality() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const specThemes = useSelector((state) => state.specThemes.specThemes);
  const dispatch = useDispatch();
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
      <div className={isVisible ? style.block__list : style.none}>
        {specThemes.map((item: any, idx: number) => (
          <button
            key={idx}
            className={
              item.isSelected
                ? style.block__list__item_active
                : style.block__list__item
            }
            onClick={() => dispatch(toggle(item.id))}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
