import style from '../style/Components.module.scss';

export default function Problem() {
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Расскажите о себе:</p>
      <textarea
        className={style.row__inp}
        name=""
        id=""
        cols={30}
        rows={10}
      ></textarea>
    </div>
  );
}
