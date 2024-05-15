import style from '../style/style.module.scss';

export default function Problem({ setProblem }: any) {
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Задать вопрос:</p>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        className={style.wrap__textarea}
        onChange={(e) => setProblem(e.target.value)}
      ></textarea>
    </div>
  );
}
