import React from 'react';
import style from './Psychologist.module.scss';
import Link from 'next/link';

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
    tags,
    inDetail,
  } = props;
  const marriedResult =
    (sex && isMarried && 'Женат') ||
    (sex && !isMarried && 'Не женат') ||
    (!sex && isMarried && 'Замужем') ||
    'Не замужем';
  return (
    <>
      {inDetail ? (
        <div className={style.psychologist_full}>
          <img src={imageUrl} alt={imageUrl} />
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
              {city.map((item: string, idx: number) => (
                <>
                  <span
                    key={idx}
                    className={style.psychologist_full__info__locations__item}
                  >
                    {item}
                  </span>
                  {idx !== city.length - 1 && (
                    <span
                      className={
                        style.psychologist_full__info__locations__separate
                      }
                    >
                      •
                    </span>
                  )}
                </>
              ))}
            </div>
            <div className={style.psychologist_full__info__tags}>
              {tags.map((item: string, idx: number) => (
                <span
                  key={idx}
                  className={style.psychologist_full__info__tags__item}
                >
                  {item}
                </span>
              ))}
            </div>
            <Link href={`team/${id}`} className="button_green">
              Записаться
            </Link>
          </div>
        </div>
      ) : (
        <div className={`keen-slider__slide ${style.psychologist_min}`}>
          <img src={imageUrl} alt={imageUrl} srcSet="" />
          <h5 className={style.psychologist__fullname}>
            {firstName} {lastName}
          </h5>
          <p className={style.psychologist__fields}>{fields.join(', ')}</p>
        </div>
      )}
    </>
  );
}
