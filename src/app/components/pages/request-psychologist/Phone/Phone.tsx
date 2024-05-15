import style from '../style/style.module.scss';

export default function Phone({ setPhone }: any) {
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Контактный телефон</p>
      <input
        type="tel"
        name=""
        id=""
        placeholder="+7 (___) ___ - __ - __"
        className={style.wrap__input}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}
