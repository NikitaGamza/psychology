import React, { useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
import './MultiRange.scss';
import style from './Price.module.scss';
import Image from 'next/image';

export default function Price() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e: any) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const [visible, setVisible] = useState(false);
  return (
    <div className={style.price}>
      <div className={style.price__head}>
        <h5 className={style.price__head__title}>Цена, руб.</h5>
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
          className={style.price__head__img}
        />
      </div>
      <div className={visible ? style.price__range : style.price__notrange}>
        <MultiRangeSlider
          min={0}
          max={1000}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
          label={false}
          ruler={false}
          style={{ border: 'none', boxShadow: 'none' }}
          barLeftColor="#FFE8D4"
          barInnerColor="#DD8E53"
          barRightColor="#FFE8D4"
          thumbLeftColor="#DD8E53"
          thumbRightColor="#DD8E53"
        />
        <div className={style.price__range__list}>
          <span className={style.price__range__list__item}>{minValue}</span>
          <span className={style.price__range__list__line}></span>
          <span className={style.price__range__list__item}>{maxValue}</span>
        </div>
      </div>
    </div>
  );
}
