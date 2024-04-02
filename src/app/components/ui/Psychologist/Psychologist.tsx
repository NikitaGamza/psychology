import React, { useEffect, useState } from 'react';
import style from './Psychologist.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Psychologist(props: any) {
  const {
    id,
    img,
    firstName,
    lastName,
    formats,
    fields,
    feedbacks,
    startWork,
    dateBirth,
    sex,
    isMarried,
    city,
    metro,
    themes,
    inDetail,
  } = props;
  const marriedResult =
    (sex && isMarried && 'Женат') ||
    (sex && !isMarried && 'Не женат') ||
    (!sex && isMarried && 'Замужем') ||
    'Не замужем';
  function experience() {
    const income: any = new Date(startWork);
    const current: any = new Date();
    const count = current - income;
    const res = new Date(count);
    return res.getFullYear() - 1970;
  }
  function age() {
    const birth: any = new Date(dateBirth);
    const current: any = new Date();
    const count = current - birth;
    const res = new Date(count);
    return res.getFullYear() - 1970;
  }
  const [modal, setModal] = useState(false);
  return (
    <>
      {inDetail ? (
        <div className={style.psychologist_full}>
          <Image
            src={`http://77.232.128.234:1337/${img?.slice(1)}`}
            alt={img}
            width={300}
            height={300}
            className={style.psychologist_full__info__img}
          />
          <div className={style.psychologist_full__info}>
            <div className={style.psychologist_full__info__head}>
              <h5 className={style.psychologist_full__info__head__fullname}>
                {firstName} {lastName}
              </h5>
              <div className={style.psychologist_full__info__head__types}>
                {formats.map((item: any) => (
                  <span
                    key={item.id}
                    className={
                      item.attributes.formatName == 'Очно'
                        ? style.psychologist_full__info__head__types__item_offline
                        : item.attributes.formatName == 'Онлайн'
                        ? style.psychologist_full__info__head__types__item_online
                        : style.psychologist_full__info__head__types__item_text
                    }
                  >
                    {item.attributes.formatName}
                  </span>
                ))}
              </div>
            </div>
            <div className={style.psychologist_full__info__feedbacks}>
              {fields.map((item: any) => (
                <span
                  key={item.id}
                  className={style.psychologist_full__info__feedbacks__fields}
                >
                  {item.attributes.name}
                </span>
              ))}

              <span
                className={style.psychologist_full__info__feedbacks__fields}
              >
                {feedbacks.length} отзыва
              </span>
            </div>
            <div>
              <span className={style.psychologist_full__info__experience}>
                Стаж {experience()} лет • {age()} лет • {marriedResult}
              </span>
            </div>
            <div className={style.psychologist_full__info__locations}>
              <span className={style.psychologist_full__info__locations__item}>
                {city}
              </span>
              {metro && (
                <>
                  <Image
                    src={'/img/icons/bullet/bullet-blue.svg'}
                    width={8}
                    height={8}
                    alt=""
                    className={
                      style.psychologist_full__info__locations__metrosep
                    }
                  ></Image>
                  <span
                    className={style.psychologist_full__info__locations__item}
                  >
                    {metro}
                  </span>
                </>
              )}
            </div>
            <div className={style.psychologist_full__info__tags}>
              {themes.map((item: any, idx: number) => {
                if (idx <= 3)
                  return (
                    <span
                      key={idx}
                      className={style.psychologist_full__info__tags__item}
                    >
                      {item.attributes.themeName}
                    </span>
                  );
              })}
              {themes.length > 4 && (
                <span
                  className={style.psychologist_full__info__tags__item}
                  onClick={() => setModal(!modal)}
                >
                  •••
                </span>
              )}
            </div>
            {modal && (
              <div className={style.modal}>
                {themes.map((item: any, idx: number) => {
                  if (idx > 3)
                    return (
                      <span key={idx} className={style.modal__tag}>
                        {item.attributes.themeName}
                      </span>
                    );
                })}
              </div>
            )}
            <Link
              href={`team/${id}`}
              className={style.psychologist_full__record}
            >
              Записаться
            </Link>
          </div>
        </div>
      ) : (
        <div className={`${style.psychologist_min}`}>
          <Image
            src={`http://77.232.128.234:1337/${img?.slice(1)}`}
            alt={'avatar'}
            width={200}
            height={200}
            className={style.psychologist_min__img}
          />
          <h5 className={style.psychologist_min__fullname}>{firstName}</h5>
          <h5 className={style.psychologist_min__fullname}>{lastName}</h5>
          <div className={style.psychologist_min__fields}>
            {fields?.map((field: any, idx: number) => (
              <span key={idx}>{field.attributes.name}</span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
