import React from 'react';
import style from './About.module.scss';
import Markdown from 'react-markdown';
interface IAbout {
  about: string;
  aboutMediaLink: string;
}
export default function About(props: IAbout) {
  return (
    <div className={style.about}>
      <h2 className={style.about__head}>О курсе</h2>
      <div className={style.about__text}>
        <Markdown>{props.about}</Markdown>
        {/* <p key={idx} className={style.about__text__item}>
            {item}
          </p> */}
      </div>
      <iframe
        className={style.about__video}
        src={props.aboutMediaLink}
      ></iframe>
    </div>
  );
}
