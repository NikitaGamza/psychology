import style from './style/Item.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/features/blogThemesSlice';

export default function Item({ item, head, type, clicker }: any) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <div className={style.block}>
      <div
        className={style.block__head}
        onClick={() => setIsVisible(!isVisible)}
      >
        <h6 className={style.block__head__title}>{head}</h6>
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

      <div
        className={
          isVisible && type === 'button'
            ? style.block__list_btns
            : isVisible
            ? style.block__list
            : style.none
        }
      >
        {item.map((radio: any, idx: number) => (
          <div key={idx} className={style.block__list__item}>
            <input
              type={type}
              name={item.name}
              id={radio.id}
              value={radio.name}
              className={
                type == 'button' && radio.isSelected
                  ? style.block__list__item_btn_active
                  : style.block__list__item_btn
              }
              onClick={() => clicker(radio.id)}
            />
            {type !== 'button' && (
              <label
                htmlFor={radio.id}
                className={style.block__list__item__label}
              >
                {radio.name}
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
