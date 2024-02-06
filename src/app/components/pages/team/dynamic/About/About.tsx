import React, { useEffect } from 'react';
import style from './About.module.scss';
import Image from 'next/image';
import Markdown from 'react-markdown';

export default function About(props: any) {
  const { aboutQuote, aboutText } = props;
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
          <span className={style.about__content__quote__text}>
            {aboutQuote}
          </span>
        </div>
        <div className={style.about__content__text}>
          <Markdown>{aboutText}</Markdown>
        </div>

        {/* <p className={style.about__content__text}>{aboutText}</p> */}
      </div>
    </div>
  );
}
