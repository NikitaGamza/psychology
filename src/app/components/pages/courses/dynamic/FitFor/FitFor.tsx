import React from 'react';
import style from './FitFor.module.scss';
import Image from 'next/image';

interface IFit {
  img: string;
  head: string;
  text: string;
}
interface IList {
  fitFor: Array<IFit>;
}

export default function FitFor(props: IList) {
  const { fitFor } = props;
  return (
    <div className={style.for}>
      <h2 className={style.for__head}>Кому подойдёт этот курс</h2>
      <div className={style.for__content}>
        {fitFor &&
          fitFor.map((item: any) => (
            <div key={item.id} className={style.for__content__item}>
              <Image
                src={`http://77.232.128.234:1337/${item.attributes.img?.data.attributes.url.slice(
                  1
                )}`}
                alt="img"
                width={240}
                height={240}
                className={style.for__content__item__img}
              />
              <h4 className={style.for__content__item__head}>
                {item.attributes.head}
              </h4>
              <p className={style.for__content__item__text}>
                {item.attributes.text}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
