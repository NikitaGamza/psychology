import style from './TeamPageComponent.module.scss';
import PsychoSlider from '@/app/components/pages/main/Team/extra/PsychoSlider/PsychoSlider';

export default function TeamPageComponent() {
  return (
    <section className={style.team}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">
              Наша команда профессионалов
            </h2>
            <p className="section__head__subtitle">
              Обратитесь за квалифицированной помощью
            </p>
          </div>
          <PsychoSlider />
          <div className={style.team__center}>
            <button className="button_green margin-0-auto">
              Посмотреть всех
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
