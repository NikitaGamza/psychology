import style from '../style/style.module.scss';

export default function Format() {
  return (
    <div className={style.wrap_radio}>
      <p className={style.wrap__title}>помощь нужна</p>
      <div className={style.wrap__list}>
        <div className={style.wrap__list__item}>
          <input
            type="radio"
            name="format"
            id="online"
            value="online"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="online" className={style.wrap__list__label}>
            Онлайн
          </label>
        </div>
        <div className={style.wrap__list__item}>
          <input
            type="radio"
            name="format"
            id="offline"
            value="offline"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="offline" className={style.wrap__list__label}>
            Очно
          </label>
        </div>
        <div className={style.wrap__list__item}>
          <input
            type="radio"
            name="format"
            id="chat"
            value="chat"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="chat" className={style.wrap__list__label}>
            Переписка
          </label>
        </div>
        <div className={style.wrap__list__item}>
          <input
            type="radio"
            name="format"
            id="notMatter"
            value="notMatter"
            className={style.wrap__list__item__radio}
          />
          <label htmlFor="notMatter" className={style.wrap__list__label}>
            Неважно
          </label>
        </div>
      </div>
    </div>
  );
}
