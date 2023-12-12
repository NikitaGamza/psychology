import React from 'react';
import style from './Cover.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface ICover {
  imgUrl: string;
  imgUrlMob: string;
  lessonType: string;
  specialization: Array<string>;
  name: string;
  description: string;
  format: string;
  startDate: string;
  duralation: number;
  weekDay: string;
  time: string;
  address?: string;
}

export default function Cover(props: ICover) {
  return (
    <div className={style.cover}>
      <div className={style.cover__main}>
        <div className={style.cover__main__info}>
          <div className={style.cover__main__info__tags}>
            {props.specialization.map((item: string, idx: number) => (
              <span key={idx} className={style.cover__main__info__tags__item}>
                {item}
              </span>
            ))}
          </div>
          <h1 className={style.cover__main__info__head}>{props.name}</h1>
          <p className={style.cover__main__info__description}>
            {props.description}
          </p>
          <Image
            src={props.imgUrlMob}
            alt="img"
            width={328}
            height={184}
            className={style.cover__main__img_mob}
          />
          <Link className={style.cover__main__info__link} href={'/'}>
            Оставить заявку
          </Link>
        </div>
        <Image
          src={props.imgUrl}
          alt="img"
          width={420}
          height={640}
          className={style.cover__main__img}
        />
      </div>
      <div className={style.cover__detail}>
        <span className={style.cover__detail__item}>
          <p className={style.cover__detail__item__title}>Формат</p>
          <p className={style.cover__detail__item__info}>{props.format}</p>
        </span>
        <span className={style.cover__detail__item}>
          <p className={style.cover__detail__item__title}>Старт</p>
          <p className={style.cover__detail__item__info}>с {props.startDate}</p>
          <p className={style.cover__detail__item__info}>
            {props.duralation} месяца
          </p>
        </span>
        <span className={style.cover__detail__item}>
          <p className={style.cover__detail__item__title}>Расписание</p>
          <p className={style.cover__detail__item__info}>{props.weekDay}</p>
          <p className={style.cover__detail__item__info}>в {props.time}</p>
        </span>
        {props.address && (
          <span className={style.cover__detail__item}>
            <p className={style.cover__detail__item__title}>Адрес</p>
            <p className={style.cover__detail__item__info}>{props.address}</p>
          </span>
        )}
      </div>
    </div>
  );
}
