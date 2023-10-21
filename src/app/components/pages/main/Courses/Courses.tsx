import style from './Courses.module.scss';

export default function Courses() {
  return (
    <section className={style.help}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Курсы по психологии</h2>
            <p className="section__head__subtitle">Какой то текст сюда</p>
          </div>
          <button className="button_green">Смотреть все курсы</button>
        </div>
      </div>
    </section>
  );
}
