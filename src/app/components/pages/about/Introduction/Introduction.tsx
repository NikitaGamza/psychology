import style from './Introduction.module.scss';

export default function Introduction() {
  return (
    <section className={style.intro}>
      <div className="container">
        <div className="section">
          <div className={style.intro__head}>
            <h2 className={style.intro__head__title}>О нас</h2>
            <div className={style.intro__head__text}>
              <p>
                Наша миссия — помочь людям найти своего специалиста и получить
                профессиональную поддержку в удобном и современном формате.{' '}
              </p>
              <p>
                Миссия Твой Психолог — помочь людям найти своего специалиста и
                получить профессиональную поддержку в удобном и современном
                формате.
              </p>
            </div>
          </div>
          <iframe
            className={style.intro__video}
            src="https://www.youtube.com/embed/9aUjqpsXEwk?si=zfyu5w3pmpTJj2n3"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
