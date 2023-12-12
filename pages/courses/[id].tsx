import React, { useState, useEffect } from 'react';
import style from './Courses.module.scss';
import { useRouter } from 'next/router';
import { courseList } from './courseList';
import Cover from '@/app/components/pages/courses/dynamic/Cover/Cover';
import About from '@/app/components/pages/courses/dynamic/About/About';
import FitFor from '@/app/components/pages/courses/dynamic/FitFor/FitFor';
import Learn from '@/app/components/pages/courses/dynamic/Learn/Learn';
import Program from '@/app/components/pages/courses/dynamic/Propgram/Program';
import Speakers from '@/app/components/pages/courses/dynamic/Speakers/Speakers';
import Feedbacks from '@/app/components/pages/courses/dynamic/Feedbacks/Feedbacks';
import Payment from '@/app/components/pages/courses/dynamic/Payment/Payment';
export default function Page() {
  const router = useRouter();
  const [course, setCourse] = useState<any>({
    id: 0,

    lessonType: 'Курс',
    specialization: ['Отношения'],
    name: 'Искусство быть вместе. Курс о партнёрских отношениях',
    description:
      'Вы узнаете, как построить гармоничное «мы», не теряя собственного «я». Поймёте, как создать и сохранить отношения, которые подходят именно вам.',
    format: 'Очно',
    startDate: '2024-04-15',
    duralation: 2,
    weekDay: 'По четвергам',
    time: '19:00',
    address: 'Московский проспект, д.6, БЦ Крона',
    aboutText: [
      'Построить и сохранить крепкие здоровые отношения — большая работа. Ссоры, неуверенность в себе, непонимание, рутина, измены, отсутствие доверия и былой страсти — серьёзные испытания, которые способны завести в тупик и разрушить гармонию в любой паре.',
      'На нашем курсе вы научитесь спокойнее проходить через эти и другие сложные моменты партнёрских отношений. Поймёте, как построить крепкий союз на основе безопасной привязанности и сблизиться с партнёром.',
    ],
    aboutVideo: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
    fitFot: [
      {
        imgUrl: '',
        head: 'Тем, кто недоволен текущими отношениями',
        text: 'Осознаете причины проблем в вашей паре и научитесь их решать. Поймёте, как улучшить отношения или закончить их безболезненно.',
      },
      {
        imgUrl: '',
        head: 'Тем, у кого не выходит строить отношения',
        text: 'Узнаете, почему ваши прошлые отношения развивались по сценарию, который вас не устраивал. Поймёте, как построить здоровые отношения.',
      },
      {
        imgUrl: '',
        head: 'Тем, кто хочет сделать хорошие отношения ещё лучше',
        text: 'Научитесь глубже понимать свои потребности и принимать непохожесть с партнёром. Поймёте, как сохранить ваше «мы» во время ссор.',
      },
    ],
    programList: [
      {
        head: 'Я как часть пары: краткий психологический обзор',
        description:
          'Познакомитесь с современными исследованиями в области психологии отношений и поймёте, как близость с другим человеком влияет на долголетие, уровень тревоги, удовлетворённость жизнью. Разберётесь, чем отличаются «я + ты» и «мы» подходы к отношениям. Узнаете, как соблюдать баланс между потребностями партнёров.',
      },
      {
        head: 'Мои потребности в отношениях',
        description: 'Descriprion',
      },
      {
        head: 'Мои прошлые отношения',
        description: 'Descriprion',
      },
      {
        head: 'Мои границы',
        description: 'Descriprion',
      },
      {
        head: 'Хорошие отношения: особенности взаимодействия партнёров',
        description: 'Descriprion',
      },
      {
        head: 'Искусство понимания партнёра',
        description: 'Descriprion',
      },
      {
        head: 'Развитие безопасной привязанности в отношениях',
        description: 'Descriprion',
      },
    ],
    speakers: [
      {
        imgUrl: '',
        firstName: 'Елена',
        lastName: 'Станковская',
        achievements: [
          'Психолог-консультант',
          'Кандидат психологических наук',
          'Доцент НИУ ВШЭ',
        ],
      },
      {
        imgUrl: '',
        firstName: 'Елена',
        lastName: 'Станковская',
        achievements: [
          'Психолог-консультант',
          'Кандидат психологических наук',
          'Доцент НИУ ВШЭ',
        ],
      },
      {
        imgUrl: '',
        firstName: 'Елена',
        lastName: 'Станковская',
        achievements: [
          'Психолог-консультант',
          'Кандидат психологических наук',
          'Доцент НИУ ВШЭ',
        ],
      },
      {
        imgUrl: '',
        firstName: 'Елена',
        lastName: 'Станковская',
        achievements: [
          'Психолог-консультант',
          'Кандидат психологических наук',
          'Доцент НИУ ВШЭ',
        ],
      },
      {
        imgUrl: '',
        firstName: 'Елена',
        lastName: 'Станковская',
        achievements: [
          'Психолог-консультант',
          'Кандидат психологических наук',
          'Доцент НИУ ВШЭ',
        ],
      },
      {
        imgUrl: '',
        firstName: 'Елена',
        lastName: 'Станковская',
        achievements: [
          'Психолог-консультант',
          'Кандидат психологических наук',
          'Доцент НИУ ВШЭ',
        ],
      },
      {
        imgUrl: '',
        firstName: 'Елена',
        lastName: 'Станковская',
        achievements: [
          'Психолог-консультант',
          'Кандидат психологических наук',
          'Доцент НИУ ВШЭ',
        ],
      },
      {
        imgUrl: '',
        firstName: 'Елена',
        lastName: 'Станковская',
        achievements: [
          'Психолог-консультант',
          'Кандидат психологических наук',
          'Доцент НИУ ВШЭ',
        ],
      },
    ],
    feedbacks: [
      {
        imgUrl: '',
        name: 'Елена',
        starts: 5,
        publicDate: '2024-04-15',
        text: [
          'Курс очень полезный. Как для тех, кто хочет разобраться в себе, так и для тех, кому нужен аналитический подход для ознакомления с психологией других людей. Хорошо сделанные занятия не дадут заскучать, а кураторы курса всегда помогут с любыми возникающими вопросами. За что им отдельное спасибо. ',
          'Курс максимально практический, все полученные знания начинаешь немедленно применять на практике, и думать «как же я раньше без этого жил». Также очень живое обсуждение присутствует в чате курса — очень приятно взаимодействовать с единомышленниками. В целом, спасибо авторам курса и кураторам за проделанную работу, курс очень крутой, полезный, нужный для всех, кто хочет знать кто он или она, и чего вы хотите.',
        ],
      },
      {
        imgUrl: '',
        name: 'Михаил',
        starts: 5,
        publicDate: '2024-04-15',
        text: [
          'Курс очень полезный. Как для тех, кто хочет разобраться в себе, так и для тех, кому нужен аналитический подход для ознакомления с психологией других людей. Хорошо сделанные занятия не дадут заскучать, а кураторы курса всегда помогут с любыми возникающими вопросами. За что им отдельное спасибо. ',
          'Курс максимально практический, все полученные знания начинаешь немедленно применять на практике, и думать «как же я раньше без этого жил». Также очень живое обсуждение присутствует в чате курса — очень приятно взаимодействовать с единомышленниками. В целом, спасибо авторам курса и кураторам за проделанную работу, курс очень крутой, полезный, нужный для всех, кто хочет знать кто он или она, и чего вы хотите.',
        ],
      },
    ],
    priceFull: 15676,
  });
  useEffect(() => {
    setCourse(courseList.find((item: any) => item.id == router.query.id));
  }, []);
  useEffect(() => {
    setCourse(courseList.find((item: any) => item.id == router.query.id));
  }, [router.query.id]);
  return (
    <div className={style.dynamic}>
      <div className="container">
        {(course?.id === 0 || course?.id) && (
          <>
            <Cover
              imgUrl={course.imgUrl}
              imgUrlMob={course.imgUrlMob}
              lessonType={course.lessonType}
              specialization={course.specialization}
              name={course.name}
              description={course.description}
              format={course.format}
              startDate={course.startDate}
              duralation={course.duralation}
              weekDay={course.weekDay}
              time={course.time}
              address={course.address}
            />
            <About
              aboutText={course.aboutText}
              aboutVideo={course.aboutVideo}
            />
            <div className={style.dynamic__content}>
              <FitFor fitFor={course.fitFor} />
              <Learn learn={course.learn} />
              <Program
                duralation={course.duralation}
                programList={course.programList}
              />
              <Speakers speakers={course.speakers} />
              <Feedbacks feedbacks={course.feedbacks} />
            </div>
          </>
        )}
      </div>
      {/* Что с прайсом? */}
      <Payment
        priceFull={course?.priceFull}
        priceMonth={course?.priceMonth}
        place={course?.place}
        startDate={course?.startDate}
      />
    </div>
  );
}
