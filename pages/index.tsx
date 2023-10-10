'use client';
import style from './page.module.scss';
import TariffPageComponent from '@/app/components/pages/main/Tariff/TariffPageComponent';
import TeamPageComponent from '@/app/components/pages/main/Team/TeamPageComponent';
import GuaranteePageComponent from '@/app/components/pages/main/Guarantee/GuaranteePageComponent';
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
          <GuaranteePageComponent />
          <TeamPageComponent />
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
