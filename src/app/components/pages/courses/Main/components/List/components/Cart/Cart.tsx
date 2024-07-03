import React, { useEffect } from 'react';
import style from './Cart.module.scss';
import Image from 'next/image';
import { monthList } from './monthList';
import Link from 'next/link';

export default function Cart(props: any) {
  const startDay = new Date(props.startDate);
  //startDay.getMonth().toLocaleString('ru-RU')
  return (
    <div className={style.slide}>
      <Image
        src={`http://77.232.128.234:1337${props?.imgUrl}`}
        alt={'course'}
        width={160}
        height={300}
        className={style.slide__img}
      />
      <div className={style.slide__content__info}>
        <div className={style.slide__content__info__wrap}>
          <div className={style.slide__content__info__topics}>
            {props.themes.map((item: any, idx: number) => (
              <span
                key={idx}
                className={style.slide__content__info__topics__item}
              >
                {item.attributes.themeName}
              </span>
            ))}
          </div>
          <Image
            src={`http://77.232.128.234:1337${props?.imgUrl}`}
            alt={'course'}
            width={288}
            height={160}
            className={style.slide__content__info__img}
          />
          <h5 className={style.slide__content__info__head}>
            {props.courseName}
          </h5>
          <div className={style.slide__content__info__time}>
            <p className={style.slide__content__info__time__text}>
              {startDay.getDate()} {monthList[startDay.getMonth()]}
            </p>
            <Image
              src={'/img/icons/rest/separator.svg'}
              alt="separator"
              width={4}
              height={4}
              className={style.slide__content__info__time__separator}
            />
            <p className={style.slide__content__info__time__text}>
              {props?.format}
            </p>
          </div>
          {props.address && (
            <div className={style.slide__content__info__location}>
              <p className={style.slide__content__info__location__text}>
                {props.address}
              </p>
            </div>
          )}
        </div>

        <div className={style.slide__content__info__record}>
          <button className={style.slide__content__info__record__btn}>
            Записаться
          </button>
          <h5 className={style.slide__content__info__record__price}>
            {props.price} ₽
          </h5>{' '}
        </div>
      </div>
    </div>
  );
}
