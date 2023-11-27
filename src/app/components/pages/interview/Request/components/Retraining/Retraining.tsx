import React from 'react';
import style from '../style/Components.module.scss';

export default function Retraining() {
  return (
    <div className={style.row}>
      <p className={style.row__head_radio}>
        Переподготовка / дополнительное образование
      </p>
      <div className={style.row__list}>
        <div className={style.row__list__switch}>
          <input
            type="radio"
            name="retrain"
            id="isRetrained"
            value="isRetrained"
            className={style.list__switch__radio}
          />
          <label
            htmlFor="isRetrained"
            className={style.row__list__switch__label}
          >
            Есть
          </label>
        </div>
        <div className={style.row__list__switch}>
          <input
            type="radio"
            name="retrain"
            id="isntRetrained"
            value="isntRetrained"
            className={style.row__list__switch__radio}
          />
          <label
            htmlFor="isntRetrained"
            className={style.row__list__switch__label}
          >
            Нет
          </label>
        </div>
      </div>
    </div>
  );
}
