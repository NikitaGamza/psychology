import React, { useState } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/features/experience/experience';

export default function Experience() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const experience = useSelector((state) => state.experience.experience);
  const dispatch = useDispatch();
  return (
    <div className={style.block}>
      <div
        className={style.block__head}
        onClick={() => setIsVisible(!isVisible)}
      >
        <h6 className={style.block__head__title}>Опыт работы</h6>
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
        {experience.map((item: any, idx: number) => (
          <div key={idx} className={style.block__list__item}>
            <input
              type="radio"
              name="experience"
              id={`exp${item.id}`}
              onClick={() => dispatch(toggle(item.id))}
              checked={item.isSelected ? true : false}
            />
            <label
              onClick={() => dispatch(toggle(item.id))}
              htmlFor={`exp${item.id}`}
              className={
                item.isSelected
                  ? style.block__list__item__label_active
                  : style.block__list__item__label
              }
            >
              {item.value ? `Более ${item.value} лет` : 'Неважно'}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
