import style from '../style/style.module.scss';

export default function Time({ setData, setTime }: any) {
  return (
    <div className={style.row}>
      <div className={style.wrap_time}>
        <p className={style.wrap__title}>предпочтительная дата сессии</p>
        <input
          type="date"
          name=""
          id=""
          className={style.wrap__input}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div className={style.wrap_time}>
        <p className={style.wrap__title}>предпочтительное время сессии</p>
        <input
          type="time"
          name=""
          id=""
          className={style.wrap__input}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
    </div>
  );
}
