import React from 'react';
import style from './Payment.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import General from '@/app/components/pages/payment/General/General';
import RuCart from '@/app/components/pages/payment/RuCart/RuCart';

export default function Payment() {
  return (
    <div className={style.pay}>
      <div className="container">
        <Link href={'/docs'} className={style.pay__back}>
          <Image
            src={'/img/icons/arrows/arrow-left-green.svg'}
            alt="back"
            width={10}
            height={7}
            className={style.pay__back__arrow}
          />
          Назад
        </Link>
        <div className={style.pay__content}>
          <h2 className={style.pay__content__head}>Способы оплаты</h2>
          <div className={style.pay__content__info}>
            <General />
            <RuCart />
          </div>
        </div>
      </div>
    </div>
  );
}
