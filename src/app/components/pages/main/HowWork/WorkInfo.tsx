'use client';
import Image from 'next/image';
import style from './HowWorkPageComponent.module.scss';

export default function WorkInfo(howWork: any) {
  const type = howWork.howWork; //почему не передаёт просто объект, а создаёт объект с одноимённым ключм
  return (
    <div className={style.how__content}>
      <Image
        src={type.url}
        alt="work"
        width={510}
        height={510}
        className={style.how__content__img}
      />
      <div className={style.how__content__info}>
        {type.list.map((item: any, index: number) => (
          <div key={index} className={style.how__content__info__item}>
            <div className={style.how__content__info__item__index}>
              {index + 1}
            </div>{' '}
            <p className={style.how__content__info__item__text}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
