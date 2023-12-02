import React from 'react';
import style from './General.module.scss';
import Link from 'next/link';

export default function General() {
  return (
    <div className={style.gen}>
      <h4 className={style.gen__head}>Оплата</h4>
      <div className={style.gen__info}>
        <p className={style.gen__info__text}>
          Мы принимаем оплаты из любой точки мира.
        </p>
        <ol className={style.gen__info__ol}>
          <li className={style.gen__info__ol__li}>
            <Link
              href={'/request-psychologist'}
              className={style.gen__info__ol__li_link}
            >
              Заполните анкету
            </Link>{' '}
            на подбор психолога у нас на сайте
          </li>
          <li className={style.gen__info__ol__li}>
            Специалист по подбору психолога напишет вам в WhatsApp, уточнит
            запрос и пришлёт ссылку на оплату в чат
          </li>
          <li className={style.gen__info__ol__li}>
            После оплаты вам подберут психолога
          </li>
        </ol>
        <p className={style.gen__info__text}>
          Если вы выбираете психолога самостоятельно в каталоге, специалист
          нашего сервиса пришлёт в чат ссылку на оплату после того, как вы
          определитесь с психологом и типом консультаций.
        </p>
      </div>
    </div>
  );
}
