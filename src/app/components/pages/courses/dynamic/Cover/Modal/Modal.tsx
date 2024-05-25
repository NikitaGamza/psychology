import React, { useEffect, Dispatch, useState, FormEvent } from 'react';
import style from './Modal.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { monthList } from './monthList';
import { submitForm } from './submitForm';

export default function Modal({
  setModal,
  priceFull,
  priceMonth,
  startDate,
  place,
  courseName,
}: any) {
  const startDay = new Date(startDate);
  const [phoneContact, setPhoneContact] = useState<string>('');
  const [checker, setChecker] = useState<boolean>(false);
  const [checkErr, setCheckErr] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>('');
  const [mobileErr, setMobileErr] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
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
        <div className={style.modal__block__wrap}>
          <div className={style.modal__left}>
            <h1 className={style.modal__left__head}>Стоимость курса</h1>
            <p className={style.modal__left__text}>
              Обучение можно оплатить сразу или воспользоваться беспроцентной
              рассрочкой на 12 месяцев.
            </p>
            <p className={style.modal__left__prev}>Полная стоимость</p>
            <h3 className={style.modal__left__full}>{priceFull}</h3>
            <h2 className={style.modal__left__month}>{priceMonth} руб./мес.</h2>
          </div>
          <div className={style.modal__right}>
            <div className={style.modal__block__close}>
              <Image
                src={'/img/icons/cross.svg'}
                alt="close"
                width={24}
                height={24}
                className={style.modal__block__close__img}
                onClick={() => setModal(false)}
              />
            </div>
            <div className={style.modal__right__wrap}>
              <p className={style.modal__right__start}>
                Начало обучения: {startDay.getDate()}{' '}
                {monthList[startDay.getMonth()]}
              </p>
              <p className={style.modal__right__place}>
                Осталось мест: {place}
              </p>
            </div>
            <h1 className={style.modal__right__head}>
              Записаться на курс или получить бесплатную консультацию
            </h1>
            <form
              className={style.modal__right__form}
              onSubmit={(e) =>
                submitForm(
                  e,
                  name,
                  mobile,
                  email,
                  comment,
                  checker,
                  setNameErr,
                  setMobileErr,
                  setEmailErr,
                  setCheckErr,
                  setModal,
                  courseName
                )
              }
            >
              <div className={style.modal__right__form__inputs}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Имя"
                  className={style.modal__right__form__inputs__text}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className={style.modal__right__form__inputs__err}>
                  {nameErr && (
                    <p className={style.modal__right__form__inputs__err__text}>
                      Введите имя
                    </p>
                  )}
                </div>
                <input
                  type="mail"
                  name=""
                  id=""
                  placeholder="Email"
                  className={style.modal__right__form__inputs__text}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div className={style.modal__right__form__inputs__err}>
                  {emailErr && (
                    <p className={style.modal__right__form__inputs__err__text}>
                      Введите ваш email
                    </p>
                  )}
                </div>
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="Телефон"
                  className={style.modal__right__form__inputs__text}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
                <div className={style.modal__right__form__inputs__err}>
                  {mobileErr && (
                    <p className={style.modal__right__form__inputs__err__text}>
                      Введите ваш номер
                    </p>
                  )}
                </div>
                <textarea
                  name=""
                  id=""
                  placeholder="Комментарий"
                  className={style.modal__right__form__inputs__text_com}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
                <div className={style.modal__right__form__inputs__checkwrap}>
                  <label
                    htmlFor="privacy"
                    onClick={() => setChecker(!checker)}
                    className={
                      checker
                        ? style.modal__right__form__inputs__check_fake
                        : style.modal__right__form__inputs__check_fake_active
                    }
                  ></label>
                  <input
                    type="checkbox"
                    name=""
                    id="privacy"
                    className={style.modal__right__form__inputs__check}
                    checked={checker}
                  />
                  <label
                    htmlFor="privacy"
                    className={style.modal__right__form__inputs__label}
                    onClick={() => setChecker(!checker)}
                  >
                    Я согласен с{' '}
                    <Link
                      href="/privacy"
                      className={style.modal__right__form__inputs__privacy}
                    >
                      политикой конфиденциальности
                    </Link>
                  </label>
                </div>
                <div className={style.modal__right__form__inputs__err}>
                  {checkErr && (
                    <p className={style.modal__right__form__inputs__err__text}>
                      Ознакомьтесь с политикой
                    </p>
                  )}
                </div>
              </div>
              {/* <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={setCaptcha}
            /> */}
              <input
                type="submit"
                className={style.modal__right__form__send}
                value="Оставить заявку"
                onClick={(e) =>
                  submitForm(
                    e,
                    name,
                    mobile,
                    email,
                    comment,
                    checker,
                    setNameErr,
                    setMobileErr,
                    setEmailErr,
                    setCheckErr,
                    setModal,
                    courseName
                  )
                }
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
