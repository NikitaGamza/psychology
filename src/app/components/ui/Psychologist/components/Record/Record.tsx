import React, { useState, FormEvent } from 'react';
import style from './Record.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '../Modal/Modal';

export default function Record({ setRecord, firstName, lastName }: any) {
  const [checker, setChecker] = useState<boolean>(false);
  const [checkErr, setCheckErr] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>('');
  const [mobileErr, setMobileErr] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [edge, setEdge] = useState<string>('');
  const [edgeErr, setEdgeErr] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const [promo, setPromo] = useState<boolean>(false);
  const [promoText, setPromoText] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);

  async function recordPsychologist(
    e: FormEvent,
    name: string,
    email: string,
    mobile: string,
    comment: string,
    edge: string,
    promoText: string
  ) {
    if (name == '') {
      setNameErr(true);
    }
    if (edge == '') {
      setEdgeErr(true);
    }
    if (email == '') {
      setEmailErr(true);
    }
    if (mobile == '') {
      setMobileErr(true);
    }
    if (checker == false) {
      setCheckErr(true);
    }
    if (
      name !== '' &&
      edge !== '' &&
      email !== '' &&
      mobile !== '' &&
      checker
    ) {
      setNameErr(false);
      setEdgeErr(false);
      setEmailErr(false);
      setMobileErr(false);
      setCheckErr(false);
      e.preventDefault();
      const subscribe = {
        data: {
          name: name,
          edge: edge,
          email: email,
          phone: mobile,
          comment: comment,
          promo: promoText,
          psychologFirstName: firstName,
          psychologLastName: lastName,
        },
      };
      const sendData = await fetch(
        'http://77.232.128.234:1337/api/record-psychologists',
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
      // setRecord(false);
      setModal(true);
    }
  }
  return (
    <div
      className={style.modal}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setRecord(false);
      }}
    >
      {modal && <Modal setRecord={setRecord} setModal={setModal} />}
      {!modal && (
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
              onClick={() => setRecord(false)}
            />
          </div>
          <h2 className={style.modal__block__head}>
            Записаться к психологу {`${firstName} ${lastName}`}
          </h2>
          <p className={style.modal__block__text}>
            Наш администратор напишет вам в Телеграм
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
            type="number"
            name=""
            id=""
            className={style.modal__block__inp}
            placeholder="Ваш возраст"
            onChange={(e) => setEdge(e.target.value)}
          />
          <div className={style.modal__block__err}>
            {edgeErr && (
              <p className={style.modal__block__err__text}>Укажите возраст</p>
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
          <textarea
            name=""
            id=""
            placeholder="Комментарий"
            className={style.modal__block__comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          {!promo && (
            <p
              className={style.modal__block__promo}
              onClick={() => setPromo(!promo)}
            >
              У меня есть промокод
            </p>
          )}
          {promo && (
            <p
              className={style.modal__block__promo}
              onClick={() => setPromo(!promo)}
            >
              У меня нет промокода
            </p>
          )}
          {promo && (
            <input
              type="text"
              name=""
              id=""
              className={style.modal__block__promobox}
              placeholder="Ваш промокод"
              onChange={(e) => setPromoText(e.target.value)}
            />
          )}

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
            onClick={(e) =>
              recordPsychologist(
                e,
                name,
                email,
                mobile,
                comment,
                edge,
                promoText
              )
            }
            className={style.modal__block__send}
          >
            Записаться
          </button>
        </div>
      )}
    </div>
  );
}
