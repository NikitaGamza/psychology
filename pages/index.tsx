'use client';
import style from './page.module.scss';
import PsychoSlider from '@/app/components/PsychoSlider/PsychoSlider';
import TariffPageComponent from '@/app/components/pages/main/Tariff/TariffPageComponent';
import Banner from '@/app/components/ui/Banner/Banner';

export default function Home() {
  return (
    <main className={style.main}>
      <div>
        <section className={style.introduction}>
          <div className={style.introduction__wrapper}>
            <div className={style.introduction__container}>
              <h1 className={style.introduction__container__head}>
                Поможем найти{' '}
                <span className={style.introduction__container__head_green}>
                  твоего психолога
                </span>
              </h1>
              <p className={style.introduction__container__description}>
                Каждый человек рождён быть счастливым и жить в гармонии с этим
                миром. Иногда мы забываем об этом и, растрачивая энергию в
                погоне за мнимыми ценностями, сбиваемся с пути. В эти моменты
                осознанность, любовь, искренность и забота окружающих способны
                помочь человеку снова увидеть свой путь.Если у Вас в жизни такой
                момент, давайте пройдём его вместе!
              </p>
              <div className={style.introduction__container__buttons}>
                <button className="button_green">Подобрать психолога</button>
                <button className={style.button_hover}>
                  <span className={style.button_hover__tg}>
                    <img
                      className={style.button_hover__tg__icon}
                      src="./telegram-white.svg"
                      alt="tg"
                    />
                  </span>
                  Задать вопрос
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className={style.main_flex}>
          <section className={style.guarantee}>
            <div className={style.container}>
              <div className={style.flex_wrap_spacearound}>
                <div className={style.guarantee__item}>
                  <h3 className={style.guarantee__item__num}>85</h3>
                  <p className={style.guarantee__item__text}>
                    специалистов в нашей команде
                  </p>
                </div>
                <div className={style.guarantee__item}>
                  <h3 className={style.guarantee__item__num_blue}>1024</h3>
                  <p className={style.guarantee__item__text}>
                    людей изменили жизнь к лучшему с нами
                  </p>
                </div>
                <div className={style.guarantee__item}>
                  <h3 className={style.guarantee__item__num_yellow}>8 лет</h3>
                  <p className={style.guarantee__item__text}>
                    средний опыт работы специалистов
                  </p>
                </div>
                <div className={style.guarantee__item}>
                  <h3 className={style.guarantee__item__num_pink}>100%</h3>
                  <p className={style.guarantee__item__text}>
                    конфеденциальность при обращении
                  </p>
                </div>
              </div>
            </div>
          </section>
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
          <TariffPageComponent />
          <Banner
            head={'Не знаете, как выбрать?'}
            text={
              'Оставьте заявку на подбор. Мы подберём Вам опытного специалиста по вашей проблеме'
            }
            imgUrl={'/brain.png'}
          />
          <Banner
            head={'Готовы начать менять себя и свою жизнь к лучшему с нами?'}
            text={
              'Не переживайте, отсутствие уверенности и решительности на все 100% — это нормально.'
            }
            imgUrl={'/brain.png'}
            bgColor={'blue'}
          />
        </div>
      </div>
    </main>
  );
}

//интерфейсы для item в циклах
//swiper down version
//Psychologist.join в отдельную фунцию
//секции в отдельные компоненты
