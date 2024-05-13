import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './style.module.scss';

export default function Speciality({ refresh }: any) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [specThemes, setSpecThemes] = useState<any>(null);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/themes`);
      const repo = await res.json();
      repo.data?.map((item: any) => (item.isSelected = false));
      setSpecThemes(repo.data);
    }
    hiData();
  }, []);
  useEffect(() => {
    let newList;
    if (specThemes) {
      newList = [...specThemes];
    }
    let refreshedList;
    if (newList) {
      refreshedList = newList.map((item: any) => (item.isSelected = false));
    }
    console.log(specThemes);
    console.log(newList);
    console.log(refreshedList);
  }, [refresh]);
  function handleToggle(foundId: number) {
    const currentId = specThemes.findIndex((item: any) => item.id === foundId);
    const updatedItem = Object.assign({}, specThemes[currentId]);
    updatedItem.isSelected = !updatedItem.isSelected;
    const newList = specThemes.slice();
    newList[currentId] = updatedItem;
    setSpecThemes(newList);
  }
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
        {specThemes?.map((item: any, idx: number) => (
          <button
            key={idx}
            className={
              item.isSelected
                ? style.block__list__item_active
                : style.block__list__item
            }
            onClick={() => handleToggle(item.id)}
          >
            {item.attributes?.themeName}
          </button>
        ))}
      </div>
    </div>
  );
}
