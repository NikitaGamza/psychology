import React, { useState } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/features/cities/cities';

export default function Cities() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const cities = useSelector((state: any) => state.cities.cities);
  const dispatch = useDispatch();
  return (
    <div className={style.block}>
      <div
        className={style.block__head}
        onClick={() => setIsVisible(!isVisible)}
      >
        <h6 className={style.block__head__title}>Город</h6>
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
        {cities.map((item: any, idx: number) => (
          <div key={idx} className={style.block__list__item}>
            <input
              type="radio"
              name="city"
              id={`cities${item.id}`}
              onClick={() => dispatch(toggle(item.id))}
              checked={item.isSelected ? true : false}
            />
            <label
              onClick={() => dispatch(toggle(item.id))}
              htmlFor={`cities${item.id}`}
              className={
                item.isSelected
                  ? style.block__list__item__label_active
                  : style.block__list__item__label
              }
            >
              {item.name ? `${item.name}` : 'Неважно'}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
