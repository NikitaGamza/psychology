import React from 'react';
import style from './Foreign.module.scss';
import Image from 'next/image';

export default function Foreign() {
  return (
    <div className={style.foreign}>
      <h4 className={style.foreign__head}>Оплата зарубежной картой (в евро)</h4>
      <h5 className={style.foreign__subhead}>Платёжный сервис Cypix</h5>
      <p className={style.foreign__text}>
        Картой иностранного банка можно оплатить без комиссии через нашего
        партнера CYPIX
      </p>
      <Image
        src={'/img/pages/payment/cypix.png'}
        alt="pay"
        width={394}
        height={463}
        className={style.foreign__img}
      />
    </div>
  );
}
