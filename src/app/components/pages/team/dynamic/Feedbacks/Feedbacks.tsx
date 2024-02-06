import React from 'react';
import style from './Feedbacks.module.scss';
import Image from 'next/image';
interface IFeed {
  id: number;
  name: string;
  text: string;
  rank: number;
  feedbackDate: Date;
}
export default function Feedbacks(props: any) {
  const { feedbacks } = props;
  return (
    <div className={style.feed}>
      <h1 className={style.feed__head}>Отзывы ({feedbacks.length})</h1>
      <div className={style.feed__content}>
        {feedbacks.map((item: any) => (
          <div className={style.feed__content__item} key={item.id}>
            <Image
              src={item.feedbackImgUrl}
              alt={item.feedbackImgUrl}
              width={100}
              height={100}
              className={style.feed__content__item__img}
            />
            <div className={style.feed__content__item__info}>
              <div className={style.feed__content__item__info__head}>
                <span className={style.feed__content__item__info__head__name}>
                  {item.feedbackName}
                </span>
                <span className={style.feed__content__item__info__head__date}>
                  {item.feedbackDate}
                </span>
              </div>
              <p className={style.feed__content__item__info__text}>
                {item.feedbackText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
