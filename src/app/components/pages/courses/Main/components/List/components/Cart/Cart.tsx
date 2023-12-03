import React, { useEffect } from 'react';
import style from './Cart.module.scss';
import Image from 'next/image';
import { monthList } from './monthList';
import Link from 'next/link';

interface ICart {
  imgUrl: string;
  lessonType: string;
  specialization: Array<string>;
  name: string;
  startDate: string;
  duralation: number;
  weekDay: string;
  time: string;
  format: string;
  address: string;
  price: number;
}

export default function Cart(props: ICart) {
  const startDay = new Date(props.startDate);
  //startDay.getMonth().toLocaleString('ru-RU')
  return (
    <div className={style.cart}>
      <Image
        src={props.imgUrl}
        alt="pic"
        width={160}
        height={300}
        className={style.cart__img}
      />
      <div className={style.cart__info}>
        <div className={style.cart__info__wrap}>
          <div className={style.cart__info__wrap__tags}>
            <div className={style.cart__info__wrap__tags__item}>
              {props.lessonType}
            </div>
            {props.specialization.map((item: string, idx: number) => (
              <div className={style.cart__info__wrap__tags__item} key={idx}>
                {item}
              </div>
            ))}
          </div>
          <h2 className={style.cart__info__wrap__head}>{props.name}</h2>
          <div className={style.cart__info__wrap__details}>
            <p className={style.cart__info__wrap__details__item}>
              c {startDay.getDate()} {monthList[startDay.getMonth()]}
            </p>
            <Image
              src={'/img/icons/bullet/bullet-green.svg'}
              alt="bullet"
              width={4}
              height={4}
            />
            <p className={style.cart__info__wrap__details__item}>
              {props.duralation} месяца
            </p>
            <Image
              src={'/img/icons/bullet/bullet-green.svg'}
              alt="bullet"
              width={4}
              height={4}
            />
            <p className={style.cart__info__wrap__details__item}>
              {props.weekDay} в {props.time}
            </p>
            <Image
              src={'/img/icons/bullet/bullet-green.svg'}
              alt="bullet"
              width={4}
              height={4}
            />
            <p className={style.cart__info__wrap__details__item}>
              {props.format}
            </p>
          </div>
          <div className={style.cart__info__wrap__address}>
            <Image
              src={'/img/icons/rest/location.svg'}
              alt="loc"
              width={18}
              height={24}
            />
            <p className={style.cart__info__wrap__address__text}>
              {props.address}
            </p>
          </div>
        </div>
        <div className={style.cart__info__rest}>
          <Link href={'/'} className={style.cart__info__rest__link}>
            Записаться
          </Link>
          <h2 className={style.cart__info__rest__price}>{props.price} ₽</h2>
        </div>
      </div>
    </div>
  );
}
