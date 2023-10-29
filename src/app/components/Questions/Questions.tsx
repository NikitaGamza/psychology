import React from 'react';
import style from './Questions.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Questions() {
  return (
    <div className={style.question}>
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
          <form
            action=""
            method="post"
            className={style.question__content__form}
          >
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
              />
              <input
                type="tel"
                name=""
                id=""
                placeholder="Телефон"
                className={style.question__content__form__inputs__text}
              />
              <div className={style.question__content__form__inputs__checkwrap}>
                <input
                  type="checkbox"
                  name=""
                  id="privacy"
                  className={style.question__content__form__inputs__check}
                />
                <label
                  htmlFor="privacy"
                  className={style.question__content__form__inputs__label}
                >
                  Я согласен с{' '}
                  <Link
                    href="/privacy"
                    className={style.question__content__form__inputs__privacy}
                  >
                    политикой конфиденциальности
                  </Link>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Оставить заявку"
              className={style.question__content__form__send}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
