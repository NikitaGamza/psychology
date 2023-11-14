import React, { useEffect } from 'react';
import style from './About.module.scss';
import Image from 'next/image';

export default function About({ props }: any) {
  const { quote, text } = props;
  useEffect(() => {
    console.log(props);
  });
  return (
    <div className={style.about}>
      <h5 className={style.about__head}>О себе</h5>
      <div className={style.about__content}>
        <div className={style.about__content__quote}>
          <Image
            src={'/img/pages/team/quote.svg'}
            alt="quote"
            width={48}
            height={30}
            className={style.about__content__quote__img}
          />
          <span className={style.about__content__quote__text}>{quote}</span>
        </div>
        <p className={style.about__content__text}>{text}</p>
      </div>
    </div>
  );
}
