'use client';
import style from './page.module.scss';
import TariffPageComponent from '@/app/components/pages/main/Tariff/TariffPageComponent';
import TeamPageComponent from '@/app/components/pages/main/Team/TeamPageComponent';
import GuaranteePageComponent from '@/app/components/pages/main/Guarantee/GuaranteePageComponent';
import Banner from '@/app/components/ui/Banner/Banner';
import IntroductionPageComponent from '@/app/components/pages/main/Introduction/IntroductionPageComponent';
import HowWorkPageComponent from '@/app/components/pages/main/HowWork/HowWorkPageComponent';
import WeHelpPageComponent from '@/app/components/pages/main/WeHelp/WeHelpPageComponent';
import Link from 'next/link';
import Questions from '@/app/components/pages/main/Questions/Questions';
export default function Home() {
  return (
    <>
      <main className={style.main}>
        <div>
          <IntroductionPageComponent />
          <div className={style.main_flex}>
            <GuaranteePageComponent />
            <TeamPageComponent />
            <TariffPageComponent />
            <HowWorkPageComponent />
            <Banner
              head={'Не знаете, как выбрать?'}
              text={
                'Оставьте заявку на подбор. Мы подберём Вам опытного специалиста по вашей проблеме'
              }
              imgUrl={'/brain.png'}
              bgColor={'green'}
            />
            <WeHelpPageComponent />
            <Banner
              head={'Готовы начать менять себя и свою жизнь к лучшему с нами?'}
              text={
                'Не переживайте, отсутствие уверенности и решительности на все 100% — это нормально.'
              }
              imgUrl={'/brain.png'}
              bgColor={'blue'}
            />
            <div className={style.main__banner}>
              <h2 className={style.main__banner__text}>
                98% наших клиентов уверены, что помощь психолога помогает решить
                проблему и улучшить качество жизни
              </h2>
              <Link href={'/cources'} className={style.main__banner__link}>
                Смотреть все курсы
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </main>
      <Questions />
    </>
  );
}

//интерфейсы для item в циклах
//Psychologist.join в отдельную фунцию
