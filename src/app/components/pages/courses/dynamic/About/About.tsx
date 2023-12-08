import React from 'react';
import style from './About.module.scss';
interface IAbout {
  aboutText: Array<string>;
  aboutVideo: string;
}
export default function About(props: IAbout) {
  return (
    <div className={style.about}>
      <h2 className={style.about__head}>О курсе</h2>
      <div className={style.about__text}>
        {props.aboutText.map((item: string, idx: number) => (
          <p key={idx} className={style.about__text__item}>
            {item}
          </p>
        ))}
      </div>
      <iframe className={style.about__video} src={props.aboutVideo}></iframe>
    </div>
  );
}
