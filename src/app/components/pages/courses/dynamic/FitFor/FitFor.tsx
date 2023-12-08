import React, { useEffect } from 'react';
import style from './FitFor.module.scss';
import Image from 'next/image';

interface IFit {
  imgUrl: string;
  head: string;
  text: string;
}

export default function FitFor(props: Array<IFit>) {
  const { fitFor } = props;
  useEffect(() => {
    console.log(fitFor);
  });
  return (
    <div className={style.for}>
      <h2 className={style.for__head}>Кому подойдёт этот курс</h2>
      <div className={style.for__content}>
        {fitFor &&
          fitFor.map((item: IFit, idx: number) => (
            <div key={idx} className={style.for__content__item}>
              <Image
                src={item.imgUrl}
                alt="img"
                width={240}
                height={240}
                className={style.for__content__item__img}
              />
              <h4 className={style.for__content__item__head}>{item.head}</h4>
              <p className={style.for__content__item__text}>{item.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
