import React, { useEffect, useState, FormEvent } from 'react';
import style from './Request.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Request() {
  const [checker, setChecker] = useState<boolean>(false);
  const [checkErr, setCheckErr] = useState<boolean>(false);
  const [org, setOrg] = useState<string>('');
  const [orgErr, setOrgErr] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>('');
  const [mobileErr, setMobileErr] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [phoneContact, setPhoneContact] = useState<string>('');
  const [emailContact, setemailContact] = useState<string>('');
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/contacts?filters[type][$eq]=phone&sort=id:desc&pagination[pageSize]=1`
      );
      const repo = await res.json();
      setPhoneContact(repo.data[0].attributes.link);
    }
    hiData();
  }, []);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/contacts?filters[type][$eq]=email&sort=id:desc&pagination[pageSize]=1`
      );
      const repo = await res.json();
      setemailContact(repo.data[0].attributes.link);
    }
    hiData();
  }, []);
  async function submitForm(
    e: FormEvent,
    name: string,
    mobile: string,
    org: string,
    checker: boolean
  ) {
    e.preventDefault();
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
    if (org === '') {
      setOrgErr(true);
    } else {
      setOrgErr(false);
    }
    if (checker === false) {
      setCheckErr(true);
    } else {
      setCheckErr(false);
    }
    // if (name !== '' && mobile !== '' && org !== '' && checker) {
    //   const yourQuest = {
    //     data: { phone: mobile, name: name },
    //   };
    //   console.log(yourQuest);
    //   const sendData = await fetch(
    //     'http://77.232.128.234:1337/api/common-questions',
    //     {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(yourQuest),
    //     }
    //   );
    //   const sendResponse = await sendData.json();
    //   console.log(sendResponse);
    //   setModal(true);
    // }
  }
  return (
    <div className={style.question}>
      {/* {modal && <Modal setModal={setModal} />} */}
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
                  <p
                    className={
                      style.question__content__info__contact__item__link
                    }
                  >
                    {phoneContact}
                  </p>
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
                  <p
                    className={
                      style.question__content__info__contact__item__link
                    }
                  >
                    {emailContact}
                  </p>
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
            className={style.question__content__form}
            onSubmit={(e) => submitForm(e, name, mobile, org, checker)}
          >
            <h4 className={style.question__content__form__head}>
              Оставьте заявку и мы перезвоним вам
            </h4>
            <div className={style.question__content__form__inputs}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Название компании"
                className={style.question__content__form__inputs__text}
                onChange={(e) => setOrg(e.target.value)}
              />
              <div className={style.question__content__form__inputs__err}>
                {orgErr && (
                  <p
                    className={style.question__content__form__inputs__err__text}
                  >
                    Введите название компании
                  </p>
                )}
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Имя"
                className={style.question__content__form__inputs__text}
                onChange={(e) => setName(e.target.value)}
              />
              <div className={style.question__content__form__inputs__err}>
                {nameErr && (
                  <p
                    className={style.question__content__form__inputs__err__text}
                  >
                    Введите имя
                  </p>
                )}
              </div>
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
              <div className={style.question__content__form__inputs__err}>
                {mobileErr && (
                  <p
                    className={style.question__content__form__inputs__err__text}
                  >
                    Введите ваш номер
                  </p>
                )}
              </div>
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
              </div>
              <div className={style.question__content__form__inputs__err}>
                {checkErr && (
                  <p
                    className={style.question__content__form__inputs__err__text}
                  >
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
              className={style.question__content__form__send}
              value="Оставить заявку"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
