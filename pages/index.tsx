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
import Questions from '@/app/components/Questions/Questions';
import Blog from '@/app/components/pages/main/Blog/Blog';
import Courses from '@/app/components/pages/main/Courses/Courses';
import Organizations from '@/app/components/pages/main/Organizations/Organizations';
import BannerAran from '@/app/components/pages/main/BannerAran/BannerAran';
import Difference from '@/app/components/pages/main/Difference/Difference';
export default function Home() {
  return (
    <>
      <main className={style.main}>
        <div>
          <IntroductionPageComponent />
          <div className={style.main_flex}>
            <GuaranteePageComponent />
            <WeHelpPageComponent />
            <Banner
              head={
                'Цветок не соревнуется с другими цветами, он просто цветёт!'
              }
              text={
                'Не переживайте, отсутствие уверенности и решительности на 1-ой консультации — это нормально.'
              }
              imgUrl={'/img/ui/Banner/flover.svg'}
              bgColor={'blue'}
            />
            <Difference />
            <TeamPageComponent />
            <HowWorkPageComponent />
            <TariffPageComponent />
            <BannerAran />
            <Blog />
            <Banner
              head={'Хотите получить ответ на свой вопрос? '}
              text={
                'Напишите нам через форму обратной связи ниже или в ТГ / ВК / WhatsApp '
              }
              imgUrl={'/img/ui/Banner/brain.png'}
              bgColor={'green'}
            />
            <Courses />
            <Organizations />
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
