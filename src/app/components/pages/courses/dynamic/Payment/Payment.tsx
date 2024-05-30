import React, { useState } from 'react';
import style from './Payment.module.scss';
import Link from 'next/link';

interface IPay {
  priceFull: number;
  priceMonth: number;
  startDate: string;
  place: number;
}
const monthList = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export default function Payment(props: IPay) {
  const { priceFull, priceMonth, startDate, place } = props;
  const [checker, setChecker] = useState<boolean>(false);
  const startDay = new Date(startDate);
  return (
    <div className={style.pay}>
      <div className={style.pay__content}>
        <div className={style.pay__content__left}>
          <div>
            <h3 className={style.pay__content__left__head}>Стоимость курса</h3>
            <p className={style.pay__content__left__text}>
              Обучение можно оплатить сразу или воспользоваться беспроцентной
              рассрочкой на 12 месяцев.
            </p>
          </div>
          <div>
            <p className={style.pay__content__left__price}>Полная стоимость</p>
            <h4 className={style.pay__content__left__pricefull}>
              {priceFull} ₽
            </h4>
            <h2 className={style.pay__content__left__pricemonth}>
              {priceMonth} ₽{' '}
              <span className={style.pay__content__left__pricemonth_idx}>
                /мес.
              </span>
            </h2>
          </div>
        </div>
        <div className={style.pay__content__right}>
          <div className={style.pay__content__right__row}>
            <span className={style.pay__content__right__row__start}>
              Начало обучения: {startDay.getDate()}{' '}
              {monthList[startDay.getMonth()]}
            </span>
            <span className={style.pay__content__right__row__place}>
              Осталось мест: {place}
            </span>
            <span className={style.pay__content__right__row__place_mob}>
              Мест: {place}
            </span>
          </div>
          <h4 className={style.pay__content__right__head}>
            Записаться на курс или получить бесплатную консультацию
          </h4>
          <div className={style.pay__content__right__form}>
            <input
              className={style.pay__content__right__form__inp}
              type="text"
              name=""
              id=""
              placeholder="Имя"
            />
            <input
              className={style.pay__content__right__form__inp}
              type="email"
              name=""
              id=""
              placeholder="E-mail"
            />
            <input
              className={style.pay__content__right__form__inp}
              type="tel"
              name=""
              id=""
              placeholder="Телефон"
            />

            <div className={style.pay__content__right__form__agree}>
              <span>
                <label
                  htmlFor="privacy"
                  onClick={() => setChecker(!checker)}
                  className={
                    checker
                      ? style.pay__content__right__form__agree__check_fake
                      : style.pay__content__right__form__agree__check_fake_active
                  }
                ></label>
                <input
                  className={style.pay__content__right__form__agree__check}
                  type="checkbox"
                  name=""
                  id="checkbox"
                  checked={checker}
                />
              </span>

              <label
                className={style.pay__content__right__form__agree__label}
                htmlFor="checkbox"
              >
                Я согласен с{' '}
                <Link
                  className={
                    style.pay__content__right__form__agree__label__link
                  }
                  href={'/docs/privacy'}
                >
                  политикой конфиденциальности
                </Link>
              </label>
            </div>
          </div>
          <button className={style.pay__content__right__btn}>
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}
