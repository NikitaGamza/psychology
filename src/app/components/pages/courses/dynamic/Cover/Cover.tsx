import React, { useEffect, useState } from 'react';
import style from './Cover.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Modal from './Modal/Modal';

interface ICover {
  imgMain: string;
  imgMobile: string;
  course_type: string;
  themes: Array<any>;
  courseName: string;
  courseDescription: string;
  format: string;
  startDate: string;
  duralation: number;
  weekDay: string;
  time: string;
  address?: string;
}

const monthList = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export default function Cover(props: any) {
  const [modal, setModal] = useState<boolean>(false);
  const { priceFull, priceMonth, startDate, place, courseName } = props;
  const startDay = new Date(startDate);
  useEffect(() => console.log(props));
  function recordCourse() {}
  return (
    <div className={style.cover}>
      {modal && (
        <Modal
          setModal={setModal}
          priceFull={priceFull}
          priceMonth={priceMonth}
          startDate={startDate}
          place={place}
          courseName={courseName}
        />
      )}
      <div className={style.cover__main}>
        <div className={style.cover__main__info}>
          <div className={style.cover__main__info__tags}>
            {props.themes.map((item: any) => (
              <span
                key={item.id}
                className={style.cover__main__info__tags__item}
              >
                {item.attributes.themeName}
              </span>
            ))}
          </div>
          <h1 className={style.cover__main__info__head}>{props.courseName}</h1>
          <p className={style.cover__main__info__description}>
            {props.courseDescription}
          </p>
          <Image
            src={`http://77.232.128.234:1337/${props.imgMobile?.slice(1)}`}
            alt="img"
            width={328}
            height={184}
            className={style.cover__main__img_mob}
          />
          <button
            className={style.cover__main__info__link}
            onClick={() => setModal(true)}
          >
            Оставить заявку
          </button>
        </div>
        <Image
          src={`http://77.232.128.234:1337/${props.imgMain?.slice(1)}`}
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
          <p className={style.cover__detail__item__info}>
            с {startDay.getDate()} {monthList[startDay.getMonth()]}
          </p>
          <p className={style.cover__detail__item__info}>
            {props.duralation} месяца
          </p>
        </span>
        <span className={style.cover__detail__item}>
          <p className={style.cover__detail__item__title}>Расписание</p>
          <p className={style.cover__detail__item__info}>{props.weekDay}</p>
          <p className={style.cover__detail__item__info}>
            в {props.time.slice(0, -7)}
          </p>
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
