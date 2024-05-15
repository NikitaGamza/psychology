import style from '../style/style.module.scss';

export default function Experience({setExp}:any) {
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Опыт работы</p>
      <select name="" id="" className={style.wrap__input} onChange={(e)=>setExp(e.target.value)}>
        <option value="Неважно">Неважно</option>
        <option value="10 лет">Более 10 лет</option>
      </select>
    </div>
  );
}
