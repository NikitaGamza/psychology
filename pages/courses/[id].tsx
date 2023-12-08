import React, { useState, useEffect } from 'react';
import style from './Courses.module.scss';
import { useRouter } from 'next/router';
import { courseList } from './courseList';
import Cover from '@/app/components/pages/courses/dynamic/Cover/Cover';
import About from '@/app/components/pages/courses/dynamic/About/About';
import FitFor from '@/app/components/pages/courses/dynamic/FitFor/FitFor';
import Learn from '@/app/components/pages/courses/dynamic/Learn/Learn';

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
            </div>
          </>
        )}
      </div>
    </div>
  );
}
