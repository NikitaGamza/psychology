import style from '../style/style.module.scss';

export default function Name({setName}:any) {
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Имя</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Введите ваше имя"
        className={style.wrap__input}
        onChange={(e)=>setName(e.target.value)}
      />
    </div>
  );
}
