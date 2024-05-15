import style from '../style/style.module.scss';

export default function City({ setCity }: any) {
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Город</p>
      <select
        name=""
        id=""
        className={style.wrap__input}
        onChange={(e) => {
          console.log(e.target.value);
          setCity(e.target.value);
        }}
      >
        <option value="Moscow">Москва</option>
        <option value="Irkutsk">Иркутск</option>
      </select>
    </div>
  );
}
