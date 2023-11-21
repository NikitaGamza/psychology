import React from 'react';
import style from './Offer.module.scss';
import Image from 'next/image';
//Главная
//шрифты
//Отступы кнопок
//бэеграунды
export default function Offer() {
  return (
    <div className={style.offer}>
      <h2 className={style.offer__head}>Что мы предлагаем</h2>
      <div className={style.offer__list}>
        <div className={style.offer__list__item}>
          <Image
            src={'/img/pages/for-psychologists/Offer/1.png'}
            alt="pic"
            width={64}
            height={64}
            className={style.offer__list__item__img}
          />
          <h4 className={style.offer__list__item__title}>Гарантируем</h4>
          <ul className={style.offer__list__item__bullet}>
            <li className={style.offer__list__item__bullet__el}>
              Быстрые выплаты за проведённые сессии
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Оплату в случае отмены клиентом встречи менее, чем за 2 часа
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Оплату за активность в Сообществе (ответы на вопросы
              пользователей, публикация статей, видеоэфиры)
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Бонусы от сервиса лучшему психотерапевту по результатам месяца
            </li>
          </ul>
        </div>
        <div className={style.offer__list__item}>
          <Image
            src={'/img/pages/for-psychologists/Offer/2.png'}
            alt="pic"
            width={64}
            height={64}
            className={style.offer__list__item__img}
          />
          <h4 className={style.offer__list__item__title}>Берем на себя</h4>
          <ul className={style.offer__list__item__bullet}>
            <li className={style.offer__list__item__bullet__el}>
              Все организационные вопросы
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Продвижение на сервисе и поиск клиентов
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Работу с клиентом до и после сессии
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Прокачку личного бренда (частично)
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Организацию семинаров, конференций и тренингов
            </li>
          </ul>
        </div>
        <div className={style.offer__list__item}>
          <Image
            src={'/img/pages/for-psychologists/Offer/3.svg'}
            alt="pic"
            width={64}
            height={64}
            className={style.offer__list__item__img}
          />
          <h4 className={style.offer__list__item__title}>Обеспечиваем</h4>
          <ul className={style.offer__list__item__bullet}>
            <li className={style.offer__list__item__bullet__el}>
              Свободный график
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Регулярные ревизии
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Профессиональное развитие и обмен опытом
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Регулярные встречи: семинары, вебинары, тренинги, конференции,
              дискуссии
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Участие в исследованиях
            </li>
          </ul>
        </div>
        <div className={style.offer__list__item}>
          <Image
            src={'/img/pages/for-psychologists/Offer/4.svg'}
            alt="pic"
            width={64}
            height={64}
            className={style.offer__list__item__img}
          />
          <h4 className={style.offer__list__item__title}>А ещё</h4>
          <ul className={style.offer__list__item__bullet}>
            <li className={style.offer__list__item__bullet__el}>
              2 недели в ТОПе и на главной странице в начале сотрудничества
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Реализацию Ваших даже самых “безбашенных идей”:)
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Сотрудничество в работе с организациями
            </li>
            <li className={style.offer__list__item__bullet__el}>
              Неформальные встречи и общение
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
