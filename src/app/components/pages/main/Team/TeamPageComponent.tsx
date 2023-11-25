import style from './TeamPageComponent.module.scss';
import PsychoSlider from '@/app/components/pages/main/Team/extra/PsychoSlider/PsychoSlider';
import Link from 'next/link';
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

          <Link href={'/team'} className={style.team__all}>
            Посмотреть всех
          </Link>
        </div>
      </div>
    </section>
  );
}
