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
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Быстрые выплаты за проведённые сессии
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                {' '}
                Оплату в случае отмены клиентом встречи менее, чем за 2 часа
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>

              <span className={style.offer__list__item__bullet__el__text}>
                Оплату за активность в Сообществе (ответы на вопросы
                пользователей, публикация статей, видеоэфиры)
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Бонусы от сервиса лучшему психотерапевту по результатам месяца
              </span>
            </li>
          </ul>
        </div>
        <div className={style.offer__list__item_right}>
          <Image
            src={'/img/pages/for-psychologists/Offer/2.png'}
            alt="pic"
            width={64}
            height={64}
            className={style.offer__list__item__img_exep}
          />
          <h4 className={style.offer__list__item__title}>Берем на себя</h4>
          <ul className={style.offer__list__item__bullet}>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>

              <span className={style.offer__list__item__bullet__el__text}>
                Все организационные вопросы
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Продвижение на сервисе и поиск клиентов
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Работу с клиентом до и после сессии
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Прокачку личного бренда (частично)
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Организацию семинаров, конференций и тренингов
              </span>
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
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Свободный график
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Регулярные ревизии
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Профессиональное развитие и обмен опытом
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Регулярные встречи: семинары, вебинары, тренинги, конференции,
                дискуссии
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Участие в исследованиях
              </span>
            </li>
          </ul>
        </div>
        <div className={style.offer__list__item_right}>
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
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                2 недели в ТОПе и на главной странице в начале сотрудничества
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Реализацию Ваших даже самых “безбашенных идей”:)
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Сотрудничество в работе с организациями
              </span>
            </li>
            <li className={style.offer__list__item__bullet__el}>
              <span className={style.offer__list__item__bullet__el__point_wrap}>
                <span
                  className={style.offer__list__item__bullet__el__point}
                ></span>
              </span>
              <span className={style.offer__list__item__bullet__el__text}>
                Неформальные встречи и общение
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
