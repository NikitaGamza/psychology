import React, { useState, Dispatch, FormEvent } from 'react';
import style from './Modal.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import submitForm from './functions/submitForm';

export default function Modal({ setModal }: any) {
  const [checker, setChecker] = useState<boolean>(false);
  const [checkErr, setCheckErr] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>('');
  const [mobileErr, setMobileErr] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<boolean>(false);

  async function subscribeForm(
    e: FormEvent,
    name: string,
    email: string,
    phone: string
  ) {
    e.preventDefault();
    const subscribe = {
      data: { name: name, email: email, phone: phone },
    };
    const sendData = await fetch(
      'http://77.232.128.234:1337/api/record-tariffs',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscribe),
      }
    );
    const sendResponse = await sendData.json();
    // setModal(false);
  }
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
        <h2 className={style.modal__block__head}>Купить тариф</h2>
        <p className={style.modal__block__text}>
          Наш специалист свяжется с вами в WhatsApp
        </p>
        <input
          type="text"
          name=""
          id=""
          className={style.modal__block__inp}
          placeholder="Ваше имя"
          onChange={(e) => setName(e.target.value)}
        />
        <div className={style.modal__block__err}>
          {nameErr && (
            <p className={style.modal__block__err__text}>Введите имя</p>
          )}
        </div>
        <input
          type="text"
          name=""
          id=""
          className={style.modal__block__inp}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={style.modal__block__err}>
          {emailErr && (
            <p className={style.modal__block__err__text}>Введите e-mail</p>
          )}
        </div>
        <input
          type="text"
          name=""
          id=""
          className={style.modal__block__inp}
          placeholder="Телефон"
          onChange={(e) => setMobile(e.target.value)}
        />
        <div className={style.modal__block__err}>
          {mobileErr && (
            <p className={style.modal__block__err__text}>Введите телефон</p>
          )}
        </div>
        <div className={style.modal__block__wrap}>
          <span>
            <label
              htmlFor="privacy"
              onClick={() => setChecker(!checker)}
              className={
                checker
                  ? style.modal__block__wrap__check_fake
                  : style.modal__block__wrap__check_fake_active
              }
            ></label>
          </span>

          <input
            type="checkbox"
            name=""
            id="privacy"
            className={style.modal__block__wrap__check}
            checked={checker}
          />
          <label
            htmlFor="privacy"
            className={style.modal__block__wrap__label}
            onClick={(e) => {
              setChecker(!checker);
              //   e.preventDefault();
              //   e.stopPropagation();
            }}
          >
            Я согласен с{' '}
            <Link
              href="/docs"
              className={style.modal__block__wrap__label__link}
              onClick={(e) => {
                // e.preventDefault();
                // e.stopPropagation();
              }}
            >
              политикой конфиденциальности
            </Link>
          </label>
        </div>
        <div className={style.modal__block__err}>
          {checkErr && (
            <p className={style.modal__block__err__text}>
              Ознакомьтесь с политикой
            </p>
          )}
        </div>
        <button
          className={style.modal__block__send}
          onClick={(e) =>
            submitForm(
              e,
              name,
              mobile,
              email,
              checker,
              setNameErr,
              setMobileErr,
              setEmailErr,
              setCheckErr,
              setModal
            )
          }
        >
          Отправить
        </button>
      </div>
    </div>
  );
}
