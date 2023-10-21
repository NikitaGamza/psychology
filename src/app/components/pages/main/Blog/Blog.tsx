import style from './Blog.module.scss';

export default function Blog() {
  return (
    <section className={style.help}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Блог</h2>
            <p className="section__head__subtitle">
              Мы помогаем вам и развиваемся сами
            </p>
          </div>
          <button className="button_green">Перейти в блог</button>
        </div>
      </div>
    </section>
  );
}
