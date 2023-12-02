import React from 'react';
import style from './RuCart.module.scss';
import Image from 'next/image';

export default function RuCart() {
  return (
    <div className={style.ru}>
      <h4 className={style.ru__head}>Оплата российской картой (в рублях)</h4>
      <p className={style.ru__text}>
        Оплатить можно картой российского банка без комиссии через
        CloudPayments. Мы принимаем к оплате карты Visa, Mastercard и МИР.
      </p>
      <Image
        src={'/img/pages/payment/cloudpayments.png'}
        alt="pay"
        width={394}
        height={463}
        className={style.ru__img}
      />
    </div>
  );
}
