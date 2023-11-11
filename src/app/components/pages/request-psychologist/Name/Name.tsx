import style from '../style/style.module.scss';

export default function Name() {
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Имя</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Введите ваше имя"
        className={style.wrap__input}
      />
    </div>
  );
}
