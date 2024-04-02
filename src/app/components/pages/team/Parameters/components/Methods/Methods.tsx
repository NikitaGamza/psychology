import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/features/methods/methods';

export default function Methods() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [methods, setMethods] = useState<Array<any>>([]);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/methods`);
      const repo = await res.json();
      repo.data.map((item: any) => (item.isSelected = false));
      setMethods(repo.data);
    }
    hiData();
  }, []);
  function handleToggle(foundId: number) {
    const currentId = methods.findIndex((item: any) => item.id === foundId);
    const updatedItem = Object.assign({}, methods[currentId]);
    updatedItem.isSelected = !updatedItem.isSelected;
    const newList = methods.slice();
    newList[currentId] = updatedItem;
    setMethods(newList);
  }
  return (
    <div className={style.block}>
      <div
        className={style.block__head}
        onClick={() => setIsVisible(!isVisible)}
      >
        <h6 className={style.block__head__title}>Методы и подходы</h6>
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
        {methods?.map((item: any, idx: number) => (
          <div key={idx} className={style.block__list__item}>
            <input
              type="checkbox"
              name=""
              id={`meth${item.id}`}
              onClick={() => handleToggle(item.id)}
              className={style.block__list__item__inp}
            />
            <div>
              <div
                onClick={() => handleToggle(item.id)}
                className={
                  item.isSelected
                    ? style.block__list__item__fake_active
                    : style.block__list__item__fake
                }
              ></div>
            </div>

            <label
              className={
                item.isSelected
                  ? style.block__list__item__label_active
                  : style.block__list__item__label
              }
              htmlFor={`meth${item.id}`}
            >
              {item.attributes.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
