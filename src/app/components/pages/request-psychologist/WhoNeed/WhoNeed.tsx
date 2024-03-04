import { useState } from 'react';
import style from '../style/style.module.scss';

export default function WhoNeed() {
  const [checker, setChecker] = useState<string>('me');
  return (
    <div className={style.wrap_radio}>
      <p className={style.wrap__title}>помощь нужна</p>
      <div className={style.wrap__list}>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('me')}
        >
          <label
            htmlFor="me"
            className={
              checker === 'me'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="whoNeed"
            id="me"
            value="me"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="me" className={style.wrap__list__label}>
            Мне лично
          </label>
        </div>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('mePartner')}
        >
          <label
            htmlFor="mePartner"
            className={
              checker === 'mePartner'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="whoNeed"
            id="mePartner"
            value="mePartner"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="mePartner" className={style.wrap__list__label}>
            Нам с партнёром
          </label>
        </div>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('meKid')}
        >
          <label
            htmlFor="meKid"
            className={
              checker === 'meKid'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="whoNeed"
            id="meKid"
            value="meKid"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="meKid" className={style.wrap__list__label}>
            Нам с ребёнком
          </label>
        </div>
      </div>
    </div>
  );
}
