import React, { useState, useEffect, FormEvent } from 'react';
import style from './Modal.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import submitForm from './functions/submitForm';

export default function Modal({
  setModal,
  tariffFormat,
  setTariffFormat,
  therapyName,
}: any) {
  const [checker, setChecker] = useState<boolean>(false);
  const [checkErr, setCheckErr] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>('');
  const [mobileErr, setMobileErr] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [community, setCommunity] = useState<any>();
  const [format, setFormat] = useState<any>();
  const [session, setSession] = useState<any>();
  const [selectedCom, setSelectedCom] = useState<any>();
  const [selectedSession, setSelectedSession] = useState<any>();
  const [price, setPrice] = useState<any>();
  // useEffect(() => {
  //   async function hiData() {
  //     const res = await fetch(
  //       `http://77.232.128.234:1337/api/tariffs?populate=*&filters[format][formatName][$eq]=${format}&filters[format_community][name][$eq]=${community}`
  //     );
  //     const repo = await res.json();
  //     setSession(repo.data);
  //     console.log(repo.data);
  //   }
  //   hiData();
  // }, [format, community]);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/tariffs?populate=*&filters[format][formatName][$eq]=${tariffFormat}&filters[format_community][name][$eq]=${therapyName}`
      );
      const repo = await res.json();
      setSession(repo.data);
    }
    hiData();
  }, []);
  // useEffect(() => {
  //   async function hiData() {
  //     const res = await fetch(
  //       `http://77.232.128.234:1337/api/tariffs?populate=*&filters[format][formatName][$eq]=${format}&filters[format_community][name][$eq]=${community}&filters[session][$eq]=${selectedSession}`
  //     );
  //     const repo = await res.json();
  //     setPrice(repo.data);
  //     console.log(repo.data);
  //   }
  //   hiData();
  // }, [format, community, selectedSession]);

  // useEffect(() => {
  //   async function hiData() {
  //     const res = await fetch(
  //       `http://77.232.128.234:1337/api/tariffs?filters[format][$eq]=${tariffFormat}`
  //     );
  //     const repo = await res.json();
  //     setTariffReq(repo.data);
  //   }
  //   hiData();
  // }, [tariffFormat]);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/formats`);
      const repo = await res.json();
      setFormat(repo.data);
    }
    hiData();
  }, []);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/format-communities`
      );
      const repo = await res.json();
      setCommunity(repo.data);
    }
    hiData();
  }, []);
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
        <select
          name=""
          id=""
          className={style.modal__block__inp}
          onChange={(e) => setTariffFormat(e.target.value)}
        >
          {format &&
            format.map((item: any, index: number) => (
              <option
                key={index}
                value={item.attributes.formatName}
                selected={item.attributes.formatName === tariffFormat}
              >
                {item.attributes.formatName}
              </option>
            ))}
        </select>
        <div className={style.modal__block__err}></div>
        <select
          name=""
          id=""
          className={style.modal__block__inp}
          onChange={(e) => setSelectedCom(e.target.value)}
        >
          {community &&
            community.map((item: any, index: number) => (
              <option
                key={index}
                value=""
                selected={item.attributes.name === therapyName}
              >
                {item.attributes.name}
              </option>
            ))}
        </select>
        <div className={style.modal__block__err}></div>
        <select
          name=""
          id=""
          className={style.modal__block__inp}
          onChange={(e) => setSelectedSession(e.target.value)}
        >
          {session &&
            session.map((item: any, index: number) => (
              <option
                key={index}
                value={item.attributes.session}
                selected={item.attributes.name === therapyName}
              >
                {item.attributes.session} сессий
              </option>
            ))}
        </select>
        <div className={style.modal__block__err}></div>
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
        {/* <h3>Итоговая цена: {selectedSession}</h3> */}
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
