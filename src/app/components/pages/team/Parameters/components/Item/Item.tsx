import style from './style/Item.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Item({ item, idx, parameters, setParameters }: any) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleParams = (e: any, name: any) => {
    const test = e.target.value;
    setParameters({ ...parameters, [name]: test });
  };
  return (
    <div key={idx} className={style.block}>
      <div
        className={style.block__head}
        onClick={() => setIsVisible(!isVisible)}
      >
        <h6 className={style.block__head__title}>{item.head}</h6>
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
        {item.list.map((radio: any, idx: number) => (
          <div key={idx} className={style.block__list__item}>
            <input
              type="radio"
              name={item.name}
              id={radio.id}
              value={radio.value}
              // checked={radio.value === parameters[item.name] || idx === 0}
              onClick={(e) => {
                handleParams(e, item.name);
                console.log('hi');
              }}
            />
            <label
              htmlFor={radio.id}
              className={style.block__list__item__label}
            >
              {radio.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
