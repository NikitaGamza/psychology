import React, { useState } from 'react';
import style from './Certificate.module.scss';
import Image from 'next/image';
import Modal from './components/Modal/Modal';

export default function Certificate() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className={style.certificate}>
      {modal && <Modal setModal={setModal} />}
      <div className="container">
        <div className={style.certificate__content}>
          <div className={style.certificate__content__info}>
            <h2 className={style.certificate__content__info__head}>
              Подарите близким заботу
            </h2>
            <p className={style.certificate__content__info__text}>
              Нам всем иногда нужна помощь, но иногда её бывает сложно
              попросить. Позаботьтесь о близком человеке — подарите ему сессию с
              психологом.
            </p>
            <button
              className={style.certificate__content__info__btn}
              onClick={() => setModal(true)}
            >
              Заказать сертификат
            </button>
          </div>
          <div className={style.certificate__content__cart}>
            <div className={style.certificate__content__cart__head}>
              <h3 className={style.certificate__content__cart__head__title}>
                Подарочный сертификат
              </h3>
              <Image
                src={'/logo.svg'}
                alt="logo"
                width={148}
                height={58}
                className={style.certificate__content__cart__head__logo}
              />
            </div>
            <h2 className={style.certificate__content__cart__price}>2 500 ₽</h2>
            <p className={style.certificate__content__cart__sessions}>
              3 сессии
            </p>
            <div className={style.certificate__content__cart__promo}>
              <span className={style.certificate__content__cart__promo__title}>
                Промокод
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="XXXXXXXX"
                className={style.certificate__content__cart__promo__code}
              />
            </div>
          </div>
        </div>
        <Image
          src={'/img/pages/tariff/cart.png'}
          alt="cart"
          width={320}
          height={217}
          className={style.certificate__content__cart__mobile}
        />
        <button
          className={style.certificate__content__info__btn_mobile}
          onClick={() => setModal(true)}
        >
          Заказать сертификат
        </button>
      </div>
    </div>
  );
}
