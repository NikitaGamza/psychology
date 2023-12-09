import React, { useEffect } from 'react';
import style from './Speakers.module.scss';
import Image from 'next/image';

interface ISpeaker {
  imgUrl: string;
  firstName: string;
  lastName: string;
  achievements: Array<string>;
}
interface IList {
  speakers: Array<ISpeaker>;
}

export default function Speakers(props: IList) {
  const { speakers } = props;
  useEffect(() => {
    console.log(speakers);
  }, []);

  return (
    <div className={style.speak}>
      <h2 className={style.speak__head}>Спикеры</h2>
      <div className={style.speak__content}>
        {speakers &&
          speakers.map((item: any, idx: number) => (
            <div key={idx} className={style.speak__content__item}>
              <Image
                src={item.imgUrl}
                alt="speaker"
                width={214}
                height={241}
                className={style.speak__content__item__img}
              />
              <h4 className={style.speak__content__item__firstname}>
                {item.firstName}
              </h4>
              <h4 className={style.speak__content__item__lastname}>
                {item.lastName}
              </h4>
              {item.achievements.map((award: string, index: number) => (
                <span key={index} className={style.speak__content__item__award}>
                  {award}.{' '}
                </span>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
