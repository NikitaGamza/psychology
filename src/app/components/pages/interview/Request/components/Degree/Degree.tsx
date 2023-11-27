import React from 'react';
import style from '../style/Components.module.scss';

export default function Degree() {
  return (
    <div className={style.row}>
      <p className={style.row__head}>Ученая степень</p>
      <div className={style.row__list_degree}>
        <div className={style.row__list__switch}>
          <input
            type="radio"
            name="degree"
            id="kpn"
            value="kpn"
            className={style.list__switch__radio}
          />
          <label htmlFor="kpn" className={style.row__list__switch__label}>
            К.п.н (Кандидат психологич. наук)
          </label>
        </div>
        <div className={style.row__list__switch}>
          <input
            type="radio"
            name="degree"
            id="dpn"
            value="dpn"
            className={style.row__list__switch__radio}
          />
          <label htmlFor="dpn" className={style.row__list__switch__label}>
            Д.п.н. (Доктор психологич. наук)
          </label>
        </div>
        <div className={style.row__list__switch}>
          <input
            type="radio"
            name="degree"
            id="kmn"
            value="kmn"
            className={style.row__list__switch__radio}
          />
          <label htmlFor="kmn" className={style.row__list__switch__label}>
            К.м.н. (Кандидат мед. наук)
          </label>
        </div>
        <div className={style.row__list__switch}>
          <input
            type="radio"
            name="degree"
            id="dmn"
            value="dmn"
            className={style.row__list__switch__radio}
          />
          <label htmlFor="dmn" className={style.row__list__switch__label}>
            Д.м.н. (Доктор мед. наук)
          </label>
        </div>
        <div className={style.row__list__switch}>
          <input
            type="radio"
            name="degree"
            id="nomn"
            value="nomn"
            className={style.row__list__switch__radio}
          />
          <label htmlFor="nomn" className={style.row__list__switch__label}>
            Нет
          </label>
        </div>
      </div>
    </div>
  );
}
