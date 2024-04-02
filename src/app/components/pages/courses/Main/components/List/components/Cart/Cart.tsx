import React, { useEffect } from 'react';
import style from './Cart.module.scss';
import Image from 'next/image';
import { monthList } from './monthList';
import Link from 'next/link';

export default function Cart(props: any) {
  const startDay = new Date(props.startDate);
  //startDay.getMonth().toLocaleString('ru-RU')
  return (
    <div className={style.cart}>
      <Image
        src={`http://77.232.128.234:1337${props.imgUrl}`}
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
            {props.specialization.map((item: any) => (
              <div className={style.cart__info__wrap__tags__item} key={item.id}>
                {item.attributes.themeName}
              </div>
            ))}
          </div>
          <Image
            src={props.imgUrlMobile}
            alt="pic"
            width={160}
            height={300}
            className={style.cart__info__img}
          />
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
              className={style.cart__info__wrap__details__middle}
            />
            <p className={style.cart__info__wrap__details__item}>
              {props.weekDay} в {props.time.slice(0, -7)}
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
          {props.address && (
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
          )}
        </div>
        <div className={style.cart__info__rest}>
          <Link
            href={`/courses/${props.id}`}
            className={style.cart__info__rest__link}
          >
            Записаться
          </Link>
          <h2 className={style.cart__info__rest__price}>{props.price} ₽</h2>
        </div>
      </div>
    </div>
  );
}
