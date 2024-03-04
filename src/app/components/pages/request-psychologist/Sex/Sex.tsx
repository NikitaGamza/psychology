import style from '../style/style.module.scss';
import { useState } from 'react';

export default function Sex() {
  const [checker, setChecker] = useState<string>('male');
  return (
    <div className={style.wrap_radio}>
      <p className={style.wrap__title}>пол психолога</p>
      <div className={style.wrap__list}>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('male')}
        >
          <label
            htmlFor="male"
            className={
              checker === 'male'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="sex"
            id="male"
            value="male"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="male" className={style.wrap__list__label}>
            Мужчина
          </label>
        </div>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('female')}
        >
          <label
            htmlFor="female"
            className={
              checker === 'female'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="sex"
            id="female"
            value="female"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="female" className={style.wrap__list__label}>
            Женщина
          </label>
        </div>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('doesnotMatter')}
        >
          <label
            htmlFor="doesnotMatter"
            className={
              checker === 'doesnotMatter'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="sex"
            id="doesnotMatter"
            value="doesnotMatter"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="doesnotMatter" className={style.wrap__list__label}>
            Неважно
          </label>
        </div>
      </div>
    </div>
  );
}
