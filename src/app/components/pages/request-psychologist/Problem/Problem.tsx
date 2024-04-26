import style from '../style/style.module.scss';

export default function Problem() {
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Задать вопрос:</p>
      <textarea name="" id="" cols={30} rows={10}></textarea>
    </div>
  );
}
