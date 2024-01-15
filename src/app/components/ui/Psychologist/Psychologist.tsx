import React, { useState } from 'react';
import style from './Psychologist.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Psychologist(props: any) {
  const {
    id,
    imageUrl,
    firstName,
    lastName,
    format,
    fields,
    feedbacks,
    experience,
    age,
    sex,
    isMarried,
    city,
    metro,
    tags,
    inDetail,
  } = props;
  const marriedResult =
    (sex && isMarried && 'Женат') ||
    (sex && !isMarried && 'Не женат') ||
    (!sex && isMarried && 'Замужем') ||
    'Не замужем';
  const [modal, setModal] = useState(false);
  return (
    <>
      {inDetail ? (
        <div className={style.psychologist_full}>
          <Image
            src={imageUrl}
            alt={imageUrl}
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
                {format.map((item: string, idx: number) => (
                  <span
                    key={idx}
                    className={
                      item == 'Очно'
                        ? style.psychologist_full__info__head__types__item_offline
                        : item == 'Онлайн'
                        ? style.psychologist_full__info__head__types__item_online
                        : style.psychologist_full__info__head__types__item_text
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={style.psychologist_full__info__feedbacks}>
              <span
                className={style.psychologist_full__info__feedbacks__fields}
              >
                {fields.join(', ')}
              </span>
              <span
                className={style.psychologist_full__info__feedbacks__fields}
              >
                {feedbacks.length} отзыва
              </span>
            </div>
            <div>
              <span className={style.psychologist_full__info__experience}>
                Стаж {experience} лет • {age} лет • {marriedResult}
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
              {tags.map((item: string, idx: number) => {
                if (idx <= 3)
                  return (
                    <span
                      key={idx}
                      className={style.psychologist_full__info__tags__item}
                    >
                      {item}
                    </span>
                  );
              })}
              {tags.length > 4 && (
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
                {tags.map((item: string, idx: number) => {
                  if (idx > 3)
                    return (
                      <span key={idx} className={style.modal__tag}>
                        {item}
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
            src={imageUrl}
            alt={imageUrl}
            width={200}
            height={200}
            className={style.psychologist_min__img}
          />
          <h5 className={style.psychologist_min__fullname}>{firstName}</h5>
          <h5 className={style.psychologist_min__fullname}>{lastName}</h5>
          <p className={style.psychologist_min__fields}>{fields.join(', ')}</p>
        </div>
      )}
    </>
  );
}
