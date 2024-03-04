import React, { useState } from 'react';
import style from '../style/Components.module.scss';

export default function Qualification() {
  const [checked, setChecked] = useState<string>('');
  return (
    <div className={style.row}>
      <p className={style.row__head_radio}>Квалификация</p>
      <div className={style.row__list}>
        <div
          className={style.row__list__switch}
          onClick={() => setChecked('Магистр')}
        >
          <label
            htmlFor="magistresy"
            className={
              checked === 'Магистр'
                ? style.row__list__switch__label_fake_active
                : style.row__list__switch__label_fake
            }
          ></label>
          <input
            type="radio"
            name="qual"
            id="magistresy"
            value="magistresy"
            className={style.row__list__switch__radio}
          />
          <label
            htmlFor="magistresy"
            className={style.row__list__switch__label}
          >
            Магистр
          </label>
        </div>
        <div
          className={style.row__list__switch}
          onClick={() => setChecked('Бакалавр')}
        >
          <label
            htmlFor="bacholor"
            className={
              checked === 'Бакалавр'
                ? style.row__list__switch__label_fake_active
                : style.row__list__switch__label_fake
            }
          ></label>
          <input
            type="radio"
            name="qual"
            id="bacholor"
            value="bacholor"
            className={style.row__list__switch__radio}
          />
          <label htmlFor="bacholor" className={style.row__list__switch__label}>
            Бакалавр
          </label>
        </div>
        <div
          className={style.row__list__switch}
          onClick={() => setChecked('Специалист')}
        >
          <label
            htmlFor="specialist"
            className={
              checked === 'Специалист'
                ? style.row__list__switch__label_fake_active
                : style.row__list__switch__label_fake
            }
          ></label>
          <input
            type="radio"
            name="qual"
            id="specialist"
            value="specialist"
            className={style.row__list__switch__radio}
          />
          <label
            htmlFor="specialist"
            className={style.row__list__switch__label}
          >
            Специалист
          </label>
        </div>
      </div>
    </div>
  );
}
