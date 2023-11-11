import style from '../style/style.module.scss';

export default function Time() {
  return (
    <div className={style.row}>
      <div className={style.wrap_time}>
        <p className={style.wrap__title}>предпочтительная датА сессии</p>
        <input
          type="date"
          name=""
          id=""
          placeholder="Введите ваше имя"
          className={style.wrap__input}
        />
      </div>
      <div className={style.wrap_time}>
        <p className={style.wrap__title}>предпочтительное время сессии</p>
        <input
          type="time"
          name=""
          id=""
          placeholder="Введите ваше имя"
          className={style.wrap__input}
        />
      </div>
    </div>
  );
}
