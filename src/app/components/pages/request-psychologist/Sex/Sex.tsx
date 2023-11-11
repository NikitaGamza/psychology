import style from '../style/style.module.scss';

export default function Sex() {
  return (
    <div className={style.wrap_radio}>
      <p className={style.wrap__title}>пол психолога</p>
      <div className={style.wrap__list}>
        <div className={style.wrap__list__item}>
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
        <div className={style.wrap__list__item}>
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
        <div className={style.wrap__list__item}>
          <input
            type="radio"
            name="sex"
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
