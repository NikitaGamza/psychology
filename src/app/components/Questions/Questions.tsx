import React, { useState, Dispatch, useEffect } from 'react';
import style from './Questions.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './components/Modal/Modal';

function submitForm(
  name: string,
  mobile: string,
  checker: boolean,
  setNameErr: Dispatch<boolean>,
  setMobileErr: Dispatch<boolean>,
  setCheckErr: Dispatch<boolean>,
  setModal: Dispatch<boolean>
) {
  if (name === '') {
    setNameErr(true);
  } else {
    setNameErr(false);
  }
  if (mobile === '') {
    setMobileErr(true);
  } else {
    setMobileErr(false);
  }
  if (checker === false) {
    setCheckErr(true);
  } else {
    setCheckErr(false);
  }
  if (name !== '' && mobile !== '' && checker) {
    setModal(true);
  }
}

export default function Questions() {
  const [checker, setChecker] = useState<boolean>(false);
  const [checkErr, setCheckErr] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>('');
  const [mobileErr, setMobileErr] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    console.log(checker);
    console.log(checkErr);
  }, [checker]);
  return (
    <div className={style.question}>
      {modal && <Modal setModal={setModal} />}
      <div className="container">
        <div className={style.question__content}>
          <div className={style.question__content__info}>
            <h2 className={style.question__content__info__head}>
              Остались вопросы?
            </h2>
            <div className={style.question__content__info__contact}>
              <p className={style.question__content__info__contact__head}>
                Позвоните или напишите нам
              </p>
              <div className={style.question__content__info__contact__wrap}>
                <div className={style.question__content__info__contact__item}>
                  <Image
                    src={'/img/icons/contacts/orange/phone.svg'}
                    alt="phone"
                    width={40}
                    height={40}
                    className={
                      style.question__content__info__contact__item__icon
                    }
                  />
                  <p className="warning">Тут будет запрос на телефон</p>
                </div>
                <div className={style.question__content__info__contact__item}>
                  <Image
                    src={'/img/icons/contacts/orange/mail.svg'}
                    alt="mail"
                    width={40}
                    height={40}
                    className={
                      style.question__content__info__contact__item__icon
                    }
                  />
                  <p className="warning">Тут будет запрос на email</p>
                </div>
              </div>
            </div>
            <div className={style.question__content__info__socials}>
              <p className={style.question__content__info__socials__head}>
                Мы в соц. сетях
              </p>
              <div className={style.question__content__info__socials__list}>
                <Image
                  src={'/img/icons/socials/orange/whataapp.svg'}
                  alt="watsapp"
                  width={40}
                  height={40}
                />
                <Image
                  src={'/img/icons/socials/orange/tg.svg'}
                  alt="tg"
                  width={40}
                  height={40}
                />
                <Image
                  src={'/img/icons/socials/orange/vkontakte.svg'}
                  alt="vk"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className={style.question__content__form}>
            <h4 className={style.question__content__form__head}>
              Оставьте заявку и мы перезвоним вам
            </h4>
            <div className={style.question__content__form__inputs}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Имя"
                className={style.question__content__form__inputs__text}
                onChange={(e) => setName(e.target.value)}
              />
              {nameErr && <p>Введите имя</p>}
              <input
                type="tel"
                name=""
                id=""
                placeholder="Телефон"
                className={style.question__content__form__inputs__text}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
              {mobileErr && <p>Введите ваш номер</p>}
              <div className={style.question__content__form__inputs__checkwrap}>
                <label
                  htmlFor="privacy"
                  onClick={() => setChecker(!checker)}
                  className={
                    checker
                      ? style.question__content__form__inputs__check_fake
                      : style.question__content__form__inputs__check_fake_active
                  }
                ></label>
                <input
                  type="checkbox"
                  name=""
                  id="privacy"
                  className={style.question__content__form__inputs__check}
                  checked={checker}
                />
                <label
                  htmlFor="privacy"
                  className={style.question__content__form__inputs__label}
                  onClick={() => setChecker(!checker)}
                >
                  Я согласен с{' '}
                  <Link
                    href="/privacy"
                    className={style.question__content__form__inputs__privacy}
                  >
                    политикой конфиденциальности
                  </Link>
                </label>
                {checkErr && <p>Ознакомьтесь с политикой</p>}
              </div>
            </div>
            <button
              className={style.question__content__form__send}
              onClick={() =>
                submitForm(
                  name,
                  mobile,
                  checker,
                  setNameErr,
                  setMobileErr,
                  setCheckErr,
                  setModal
                )
              }
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
