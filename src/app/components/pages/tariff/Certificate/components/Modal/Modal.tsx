import React, { useState, Dispatch } from 'react';
import style from './Modal.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function onSend(
  mail: string,
  name: string,
  checker: boolean,
  setCheckMail: Dispatch<boolean>,
  setCheckName: Dispatch<boolean>,
  setCheckErr: Dispatch<boolean>
) {
  if (mail === '') {
    setCheckMail(true);
  } else {
    setCheckMail(false);
  }
  if (name === '') {
    setCheckName(true);
  } else {
    setCheckName(false);
  }
  if (!checker) {
    setCheckErr(true);
  } else {
    setCheckErr(false);
  }
}

export default function Modal({ setModal }: any) {
  const [checker, setChecker] = useState<boolean>(false);
  const [checkErr, setCheckErr] = useState<boolean>(false);
  const [mail, setMail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [checkMail, setCheckMail] = useState<boolean>(false);
  const [checkName, setCheckName] = useState<boolean>(false);
  const [selector, setSelector] = useState<string>('1');
  return (
    <div
      className={style.modal}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setModal(false);
      }}
    >
      <div
        className={style.modal__block}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className={style.modal__block__left}>
          <div className={style.modal__block__left__close}>
            <Image
              src={'/img/icons/cross.svg'}
              alt="close"
              width={24}
              height={24}
              onClick={() => setModal(false)}
            />
          </div>
          <h3 className={style.modal__block__left__head}>Купить сертификат</h3>
          <div className={style.modal__block__left__cart}>
            <div className={style.modal__block__left__cart__head}>
              <h3 className={style.modal__block__left__cart__head__title}>
                Подарочный сертификат
              </h3>
              <Image
                src={'/logo.svg'}
                alt="logo"
                width={148}
                height={58}
                className={style.modal__block__left__cart__head__logo}
              />
            </div>
            <h2 className={style.modal__block__left__cart__price}>
              {selector === '1'
                ? `2 500 ₽`
                : selector === '4'
                ? `2 504 ₽`
                : selector === '4'
                ? `2 508 ₽`
                : `2 512 ₽`}
            </h2>
            <p className={style.modal__block__left__cart__sessions}>
              {selector} сессии
            </p>
            <div className={style.modal__block__left__cart__promo}>
              <span className={style.modal__block__left__cart__promo__title}>
                Промокод
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="XXXXXXXX"
                className={style.modal__block__left__cart__promo__code}
              />
            </div>
          </div>
          <div className={style.modal__block__left__options}>
            <button className={style.modal__block__left__options__btn}>
              Себе
            </button>
            <button className={style.modal__block__left__options__btn}>
              В подарок
            </button>
          </div>
          <select
            className={style.modal__block__left__select}
            onChange={(e) => setSelector(e.target.value)}
          >
            <option value={'1'}>1 сессия</option>
            <option value={'4'}>4 сессии</option>
            <option value={'8'}>8 сессий</option>
            <option value={'12'}>12 сессий</option>
          </select>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ваше имя"
            className={style.modal__block__left__inp}
            onChange={(e) => setName(e.target.value)}
          />
          <div className={style.modal__block__left__errplace}>
            {checkName && (
              <p className={style.modal__block__left__errplace__text}>
                Введите имя
              </p>
            )}
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="E-mail"
            className={style.modal__block__left__inp}
            onChange={(e) => setMail(e.target.value)}
          />
          <div className={style.modal__block__left__errplace}>
            {checkMail && (
              <p className={style.modal__block__left__errplace__text}>
                Введите e-mail
              </p>
            )}
          </div>
          <div className={style.modal__block__left__checkwrap}>
            <label
              htmlFor="privacy"
              onClick={() => setChecker(!checker)}
              className={
                checker
                  ? style.modal__block__left__checkwrap__check_fake
                  : style.modal__block__left__checkwrap__check_fake_active
              }
            ></label>
            <input
              type="checkbox"
              name=""
              id="privacy"
              className={style.modal__block__left__checkwrap__check}
              checked={checker}
            />
            <label
              htmlFor="privacy"
              className={style.modal__block__left__checkwrap__label}
              onClick={() => setChecker(!checker)}
            >
              Я согласен с{' '}
              <Link
                href="/privacy"
                className={style.modal__block__left__checkwrap__privacy}
              >
                политикой конфиденциальности
              </Link>
            </label>
          </div>
          <div className={style.modal__block__left__errplace}>
            {checkErr && (
              <p className={style.modal__block__left__errplace__text}>
                Ознакомьтесь с политикой
              </p>
            )}
          </div>
          <button
            onClick={() =>
              onSend(
                mail,
                name,
                checker,
                setCheckMail,
                setCheckName,
                setCheckErr
              )
            }
            className={style.modal__block__left__pay}
          >
            Оплатить{' '}
            {selector === '1'
              ? `2 500 ₽`
              : selector === '4'
              ? `2 504 ₽`
              : selector === '4'
              ? `2 508 ₽`
              : `2 512 ₽`}
          </button>
        </div>
        <div className={style.modal__block__right}>
          <div className={style.modal__block__right__close}>
            <Image
              src={'/img/icons/cross.svg'}
              alt="close"
              width={24}
              height={24}
              onClick={() => setModal(false)}
            />
          </div>
          <div className={style.modal__block__right__cart}>
            <div className={style.modal__block__right__cart__head}>
              <h3 className={style.modal__block__right__cart__head__title}>
                Подарочный сертификат
              </h3>
              <Image
                src={'/logo.svg'}
                alt="logo"
                width={148}
                height={58}
                className={style.modal__block__right__cart__head__logo}
              />
            </div>
            <h2 className={style.modal__block__right__cart__price}>
              {selector === '1'
                ? `2 500 ₽`
                : selector === '4'
                ? `2 504 ₽`
                : selector === '4'
                ? `2 508 ₽`
                : `2 512 ₽`}
            </h2>
            <p className={style.modal__block__right__cart__sessions}>
              {selector} сессии
            </p>
            <div className={style.modal__block__right__cart__promo}>
              <span className={style.modal__block__right__cart__promo__title}>
                Промокод
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="XXXXXXXX"
                className={style.modal__block__right__cart__promo__code}
              />
            </div>
          </div>
          <div className={style.modal__block__right__how}>
            <h3 className={style.modal__block__right__how__head}>
              Как воспользоваться?
            </h3>
            <div className={style.modal__block__right__how__bullet}>
              <div className={style.modal__block__right__how__bullet__item}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                />
                <span
                  className={style.modal__block__right__how__bullet__item__text}
                >
                  Выберете подходящего психолога
                </span>
              </div>
              <div className={style.modal__block__right__how__bullet__item}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                />
                <span
                  className={style.modal__block__right__how__bullet__item__text}
                >
                  Введите промокод при записи на сессию
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
