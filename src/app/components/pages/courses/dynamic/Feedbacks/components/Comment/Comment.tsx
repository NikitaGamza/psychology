import React from 'react';
import style from './Comment.module.scss';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

interface IFeed {
  imgUrl: string;
  name: string;
  stars: number;
  publicDate: string;
  text: Array<string>;
}
export default function Comment(item: IFeed) {
  return (
    <div className={`keen-slider__slide ${style.slide}`}>
      <div className={style.slide__content}>
        <Image
          src={item.imgUrl}
          alt="img"
          width={160}
          height={160}
          className={style.slide__content__img}
        />
        <div className={style.slide__content__info}>
          <div className={style.slide__content__info__head}>
            <div className={style.slide__content__info__head__wrap}>
              <span className={style.slide__content__info__head__wrap__name}>
                {item.name}
              </span>
              <span className={style.slide__content__info__head__wrap__stars}>
                {/* {item.stars.map(()=>(
                        <Image src={'/img/icons/rest/star.svg'} alt='star' width={20} height={20} />
                      ))} */}
              </span>
            </div>
            <span className={style.slide__content__info__head__public}>
              {item.publicDate}
            </span>
            <div className={style.slide__content__info__head__mobile}>
              <span className={style.slide__content__info__head__mobile__stars}>
                {item.stars}
              </span>
              <span
                className={style.slide__content__info__head__mobile__public}
              >
                {item.publicDate}
              </span>
            </div>
          </div>
          <div className={style.slide__content__info__comment}>
            {item.text.map((text: string, idxText: number) => (
              <p
                key={idxText}
                className={style.slide__content__info__comment__text}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
