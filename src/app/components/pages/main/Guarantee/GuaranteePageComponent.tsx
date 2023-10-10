import style from './GuaranteePageComponent.module.scss';

export default function GuaranteePageComponent() {
  return (
    <section className={style.guarantee}>
      <div className="container">
        <div className={style.guarantee__list}>
          <div className={style.guarantee__list__item}>
            <h3 className={style.guarantee__list__item__num_green}>85</h3>
            <p className={style.guarantee__list__item__text}>
              специалистов в нашей команде
            </p>
          </div>
          <div className={style.guarantee__list__item}>
            <h3 className={style.guarantee__list__item__num_blue}>1024</h3>
            <p className={style.guarantee__list__item__text}>
              людей изменили жизнь к лучшему с нами
            </p>
          </div>
          <div className={style.guarantee__list__item}>
            <h3 className={style.guarantee__list__item__num_yellow}>8 лет</h3>
            <p className={style.guarantee__list__item__text}>
              средний опыт работы специалистов
            </p>
          </div>
          <div className={style.guarantee__list__item}>
            <h3 className={style.guarantee__list__item__num_pink}>100%</h3>
            <p className={style.guarantee__list__item__text}>
              конфеденциальность при обращении
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
