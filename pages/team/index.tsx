import style from './Team.module.scss';

export default function Team() {
  return (
    <div className={style.about}>
      <div className="container">
        <div className={style.about__main}>
          <div className={style.about__main__content}>
            <h1>Подобрать психолога</h1>
          </div>

          <div className={style.about__main__parameters}>
            <h5>параметры</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
