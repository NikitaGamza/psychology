import React, { useEffect, useState } from 'react';
import style from './Modal.module.scss';
import Image from 'next/image';

export default function Modal({ setModal }: any) {
  const [phoneContact, setPhoneContact] = useState<string>('');
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
        <h4 className={style.modal__block__head}>Благодарим вас за доверие</h4>
        <p className={style.modal__block__text}>Подписка успешно оформлена</p>
        <hr className={style.modal__block__hr} />
        <p className={style.modal__block__text}>
          Если у Вас есть вопрос, который вы хотели бы обсудить прямо сейчас, то
          позвоните нам по телефону или напишите.
        </p>
        <p className={style.modal__block__phone}>{phoneContact}</p>
        <div className={style.modal__block__links}>
          <Image
            src={'/img/icons/socials/green/whataapp.svg'}
            alt="trust"
            width={40}
            height={40}
            className={style.modal__block__links__item}
          />
          <Image
            src={'/img/icons/socials/green/tg.svg'}
            alt="trust"
            width={40}
            height={40}
            className={style.modal__block__links__item}
          />
          <Image
            src={'/img/icons/socials/green/vk.svg'}
            alt="trust"
            width={40}
            height={40}
            className={style.modal__block__links__item}
          />
        </div>
      </div>
    </div>
  );
}
