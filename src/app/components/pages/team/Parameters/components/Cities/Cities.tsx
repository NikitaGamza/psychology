import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/features/cities/cities';

export default function Cities({ setSelectedCity }: any) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [cities, setCities] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/cities`);
      const repo = await res.json();
      repo.data.map((item: any) => (item.isSelected = false));
      setCities(repo.data);
    }
    hiData();
  }, []);
  function handleToggle(foundId: number) {
    const currentId = cities.findIndex((item: any) => item.id === foundId);
    const updatedItem = Object.assign({}, cities[currentId]);
    updatedItem.isSelected = !updatedItem.isSelected;
    const newList = cities.slice();
    newList.map((item: any) => (item.isSelected = false));
    newList[currentId] = updatedItem;
    setCities(newList);
  }
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
        {cities?.map((item: any, idx: number) => (
          <div key={idx} className={style.block__list__item}>
            <label
              htmlFor={`cities${item.id}`}
              className={
                item.isSelected
                  ? style.block__list__item__label_fake_active
                  : style.block__list__item__label_fake
              }
            ></label>
            <input
              type="radio"
              name="city"
              id={`cities${item.id}`}
              onClick={() => {
                setSelectedCity(item.attributes.name);
                handleToggle(item.id);
              }}
              checked={item.isSelected ? true : false}
              className={style.block__list__item__radio}
            />
            <label
              htmlFor={`cities${item.id}`}
              className={
                item.isSelected
                  ? style.block__list__item__label_active
                  : style.block__list__item__label
              }
            >
              {item.attributes.name ? `${item.attributes.name}` : 'Неважно'}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
