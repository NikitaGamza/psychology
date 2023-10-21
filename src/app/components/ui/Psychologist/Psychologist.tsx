import React from 'react';
import style from './Psychologist.module.scss';

export default function Psychologist(props: any) {
  const {
    imageUrl,
    firstName,
    lastName,
    workType,
    fields,
    feedbacks,
    experience,
    age,
    sex,
    isMarried,
    locations,
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
            <div className="flex_wrap_align-center gap-16">
              <h5 className={style.psychologist__fullname}>
                {firstName} {lastName}
              </h5>
              <div className="flex_wrap gap-4">
                {workType.map((item: any) => (
                  <span className={style.psychologist_full__worktype}>
                    {/* разноцвет */}
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex_wrap_align-center gap-16">
              <span className={style.psychologist__fields}>
                {fields.join(', ')}
              </span>
              <span className={style.psychologist__fields}>
                {feedbacks.length} отзыва
              </span>
            </div>
            <div>
              <span className={style.psychologist_full__experience}>
                Стаж {experience} лет • {age} лет • {marriedResult}
              </span>
            </div>
            <div>
              <span className={style.psychologist_full__locations}>
                {locations.join(' • ')}
              </span>
            </div>
            <div className="flex_wrap gap-4">
              {tags.map((item: any) => (
                <span className={style.psychologist_full__tag}>{item}</span>
              ))}
            </div>
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
