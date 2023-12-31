import { useEffect, useState } from 'react';
import style from './Team.module.scss';
import { useRouter } from 'next/router';
// import { psychoList } from './psychologist';
import Cover from '@/app/components/pages/team/dynamic/Cover/Cover';
import Education from '@/app/components/pages/team/dynamic/Education/Education';
import Experience from '@/app/components/pages/team/dynamic/Experience/Experience';
import Specialization from '@/app/components/pages/team/dynamic/Specialization/Specialization';
import Methods from '@/app/components/pages/team/dynamic/Methods/Methods';
import About from '@/app/components/pages/team/dynamic/About/About';
import Diploma from '@/app/components/pages/team/dynamic/Diploma/Diploma';
import Popular from '@/app/components/pages/team/dynamic/Popular/Popular';
import NotFoundPage from '@/app/not-found';

const psychoList = [
  {
    id: 0,
    imageUrl: '/img/Psychologist/blank.svg',
    firstName: 'Игорь',
    lastName: 'Батамиров',
    format: ['Очно', 'Онлайн', 'Переписка'],
    fields: ['Психолог', 'семейный психолог', 'к.п.н'],
    feedbacks: ['первый отзыв', 'второй отзыв'],
    experience: 4,
    age: 35,
    sex: true,
    isMarried: true,
    city: 'Санкт-Петербург',
    address: 'Московский пр-т, д. 12, оф. 312',
    metro: 'Московская',
    tags: ['Дети', 'Семья', 'Карьера'],
    links: { youtube: 'youtube', tg: '', vk: 'vk' },
    education: [
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
    ],
    workExperience: [
      {
        place: 'Центр системной семейной терапии',
        title: 'Психолог',
        startYear: 2021,
        endYear: 2022,
      },
      {
        place: 'Школа',
        title: 'Школьный психолог',
        startYear: 2016,
        endYear: 2021,
      },
    ],
    methods: [
      {
        name: 'Гештальт-терапия',
        description: ' объяснение',
      },
      {
        name: 'Системная семейная терапия (ССТ)',
        description: ' объяснение',
      },
      {
        name: 'Когнитивно-бихевиоральная терапия (КБТ/КПТ)',
        description:
          ' это современное направление психотерапии, которое разработал Ф. Перлз и его коллеги. Само название терапии произошло от немецкого слова Gestalt, которое имеет очень интересный смысл. Буквально оно означает что-то законченное, целое, перешедшее «из ничего во что-то».',
      },
      {
        name: 'Арт-терапия',
        description: ' объяснение',
      },
    ],
    about: {
      quote:
        'Мне интереснее всего – человек и жизнь, с которой он встречается.',
      text: 'В свою профессию я пришла случайно, но осталась в ней по любви. Призналась себе, что слушать и слышать у меня получается намного лучше многого другого, а из всего, что меня окружает мне интереснее всего – человек и жизнь, с которой он встречается. ',
    },
    diploma: ['/img/pages/team/diploma1.png', '/img/pages/team/diploma2.png'],
  },
  {
    id: 1,
    imageUrl: '/img/Psychologist/blank.svg',
    firstName: 'Наталья',
    lastName: 'Петрова',
    format: ['Очно', 'Онлайн'],
    fields: ['Психолог', 'к.п.н'],
    feedbacks: ['первый отзыв', 'второй отзыв'],
    experience: 10,
    age: 35,
    sex: false,
    isMarried: true,
    city: 'Иркутск',
    address: 'Московский пр-т, д. 12, оф. 312',
    metro: 'Московская',
    tags: [
      'Дети',
      'Семья',
      'Страхи',
      'Грусть, тоска',
      'Самоопределение',
      'Личностный рост',
    ],
    links: { youtube: '', tg: '', vk: '' },
    education: [
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
    ],
    workExperience: [
      {
        place: 'Центр системной семейной терапии',
        title: 'Психолог',
        startYear: 2021,
        endYear: 2022,
      },
      {
        place: 'Школа',
        title: 'Школьный психолог',
        startYear: 2016,
        endYear: 2021,
      },
    ],
    methods: [
      {
        name: 'Гештальт-терапия',
        description: ' объяснение',
      },
      {
        name: 'Системная семейная терапия (ССТ)',
        description: ' объяснение',
      },
      {
        name: 'Когнитивно-бихевиоральная терапия (КБТ/КПТ)',
        description:
          ' это современное направление психотерапии, которое разработал Ф. Перлз и его коллеги. Само название терапии произошло от немецкого слова Gestalt, которое имеет очень интересный смысл. Буквально оно означает что-то законченное, целое, перешедшее «из ничего во что-то».',
      },
      {
        name: 'Арт-терапия',
        description: ' объяснение',
      },
    ],
    about: {
      quote:
        'Мне интереснее всего – человек и жизнь, с которой он встречается.',
      text: 'В свою профессию я пришла случайно, но осталась в ней по любви. Призналась себе, что слушать и слышать у меня получается намного лучше многого другого, а из всего, что меня окружает мне интереснее всего – человек и жизнь, с которой он встречается. ',
    },
    diploma: ['/img/pages/team/diploma1.png', '/img/pages/team/diploma2.png'],
  },
  {
    id: 2,
    imageUrl: '/img/Psychologist/blank.svg',
    firstName: 'Элина',
    lastName: 'Кроповницкая',
    format: ['Онлайн', 'Переписка'],
    fields: ['Психолог', 'семейный психолог', 'к.п.н'],
    feedbacks: ['первый отзыв', 'второй отзыв'],
    experience: 10,
    age: 35,
    sex: false,
    isMarried: false,
    city: 'Санкт-Петербург',
    address: 'Московский пр-т, д. 12, оф. 312',
    metro: 'Московская',
    tags: ['Дети', 'Семья', 'Карьера'],
    links: { youtube: '', vk: '' },
    education: [
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
    ],
    workExperience: [
      {
        place: 'Центр системной семейной терапии',
        title: 'Психолог',
        startYear: 2021,
        endYear: 2022,
      },
      {
        place: 'Школа',
        title: 'Школьный психолог',
        startYear: 2016,
        endYear: 2021,
      },
    ],
    methods: [
      {
        name: 'Гештальт-терапия',
        description: ' объяснение',
      },
      {
        name: 'Системная семейная терапия (ССТ)',
        description: ' объяснение',
      },
      {
        name: 'Когнитивно-бихевиоральная терапия (КБТ/КПТ)',
        description:
          ' это современное направление психотерапии, которое разработал Ф. Перлз и его коллеги. Само название терапии произошло от немецкого слова Gestalt, которое имеет очень интересный смысл. Буквально оно означает что-то законченное, целое, перешедшее «из ничего во что-то».',
      },
      {
        name: 'Арт-терапия',
        description: ' объяснение',
      },
    ],
    about: {
      quote:
        'Мне интереснее всего – человек и жизнь, с которой он встречается.',
      text: 'В свою профессию я пришла случайно, но осталась в ней по любви. Призналась себе, что слушать и слышать у меня получается намного лучше многого другого, а из всего, что меня окружает мне интереснее всего – человек и жизнь, с которой он встречается. ',
    },
    diploma: ['/img/pages/team/diploma1.png', '/img/pages/team/diploma2.png'],
  },
  {
    id: 3,
    imageUrl: '/img/Psychologist/blank.svg',
    firstName: 'Любовь',
    lastName: 'Иваненко',
    format: ['Онлайн', 'Переписка'],
    fields: ['Психолог', 'семейный психолог', 'к.п.н'],
    feedbacks: ['первый отзыв', 'второй отзыв'],
    experience: 10,
    age: 35,
    sex: false,
    isMarried: false,
    city: 'Санкт-Петербург',
    address: 'Московский пр-т, д. 12, оф. 312',
    metro: 'Московская',
    tags: ['Дети', 'Семья', 'Карьера'],
    links: { youtube: '', tg: '', vk: '' },
    education: [
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
    ],
    workExperience: [
      {
        place: 'Центр системной семейной терапии',
        title: 'Психолог',
        startYear: 2021,
        endYear: 2022,
      },
      {
        place: 'Школа',
        title: 'Школьный психолог',
        startYear: 2016,
        endYear: 2021,
      },
    ],
    methods: [
      {
        name: 'Гештальт-терапия',
        description: ' объяснение',
      },
      {
        name: 'Системная семейная терапия (ССТ)',
        description: ' объяснение',
      },
      {
        name: 'Когнитивно-бихевиоральная терапия (КБТ/КПТ)',
        description:
          ' это современное направление психотерапии, которое разработал Ф. Перлз и его коллеги. Само название терапии произошло от немецкого слова Gestalt, которое имеет очень интересный смысл. Буквально оно означает что-то законченное, целое, перешедшее «из ничего во что-то».',
      },
      {
        name: 'Арт-терапия',
        description: ' объяснение',
      },
    ],
    about: {
      quote:
        'Мне интереснее всего – человек и жизнь, с которой он встречается.',
      text: 'В свою профессию я пришла случайно, но осталась в ней по любви. Призналась себе, что слушать и слышать у меня получается намного лучше многого другого, а из всего, что меня окружает мне интереснее всего – человек и жизнь, с которой он встречается. ',
    },
    diploma: ['/img/pages/team/diploma1.png', '/img/pages/team/diploma2.png'],
  },
  {
    id: 4,
    imageUrl: '/img/Psychologist/blank.svg',
    firstName: 'Анна',
    lastName: 'Костина',
    format: ['Онлайн', 'Переписка'],
    fields: ['Психолог', 'семейный психолог', 'к.п.н'],
    feedbacks: ['первый отзыв', 'второй отзыв'],
    experience: 10,
    age: 35,
    sex: false,
    isMarried: false,
    city: 'Иркутск',
    address: 'Московский пр-т, д. 12, оф. 312',
    tags: ['Дети', 'Семья', 'Карьера'],
    links: { youtube: '', tg: '', vk: '' },
    education: [
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
    ],
    workExperience: [
      {
        place: 'Центр системной семейной терапии',
        title: 'Психолог',
        startYear: 2021,
        endYear: 2022,
      },
      {
        place: 'Школа',
        title: 'Школьный психолог',
        startYear: 2016,
        endYear: 2021,
      },
    ],
    methods: [
      {
        name: 'Гештальт-терапия',
        description: ' объяснение',
      },
      {
        name: 'Системная семейная терапия (ССТ)',
        description: ' объяснение',
      },
      {
        name: 'Когнитивно-бихевиоральная терапия (КБТ/КПТ)',
        description:
          ' это современное направление психотерапии, которое разработал Ф. Перлз и его коллеги. Само название терапии произошло от немецкого слова Gestalt, которое имеет очень интересный смысл. Буквально оно означает что-то законченное, целое, перешедшее «из ничего во что-то».',
      },
      {
        name: 'Арт-терапия',
        description: ' объяснение',
      },
    ],
    about: {
      quote:
        'Мне интереснее всего – человек и жизнь, с которой он встречается.',
      text: 'В свою профессию я пришла случайно, но осталась в ней по любви. Призналась себе, что слушать и слышать у меня получается намного лучше многого другого, а из всего, что меня окружает мне интереснее всего – человек и жизнь, с которой он встречается. ',
    },
    diploma: ['/img/pages/team/diploma1.png', '/img/pages/team/diploma2.png'],
  },
  {
    id: 5,
    imageUrl: '/img/Psychologist/blank.svg',
    firstName: 'Леонид',
    lastName: 'Матвеев',
    format: ['Онлайн', 'Переписка'],
    fields: ['Психолог', 'семейный психолог', 'к.п.н'],
    feedbacks: ['первый отзыв', 'второй отзыв'],
    experience: 10,
    age: 35,
    sex: true,
    isMarried: false,
    city: 'Иркутск',
    address: 'Московский пр-т, д. 12, оф. 312',
    tags: ['Дети', 'Семья', 'Карьера'],
    links: { youtube: '', tg: '', vk: '' },
    education: [
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
      {
        university: 'Институт Практической Психологии и Психоанализа',
        title: 'Бакалавр',
        occupation: 'Системная семейная психотерапия',
        year: 2010,
      },
      {
        university: 'Челябинский государственный педагогический университет',
        title: 'Степень бакалавра педагогики по направлению педагогика',
        year: 2012,
      },
    ],
    workExperience: [
      {
        place: 'Центр системной семейной терапии',
        title: 'Психолог',
        startYear: 2021,
        endYear: 2022,
      },
      {
        place: 'Школа',
        title: 'Школьный психолог',
        startYear: 2016,
        endYear: 2021,
      },
    ],
    methods: [
      {
        name: 'Гештальт-терапия',
        description: ' объяснение',
      },
      {
        name: 'Системная семейная терапия (ССТ)',
        description: ' объяснение',
      },
      {
        name: 'Когнитивно-бихевиоральная терапия (КБТ/КПТ)',
        description:
          ' это современное направление психотерапии, которое разработал Ф. Перлз и его коллеги. Само название терапии произошло от немецкого слова Gestalt, которое имеет очень интересный смысл. Буквально оно означает что-то законченное, целое, перешедшее «из ничего во что-то».',
      },
      {
        name: 'Арт-терапия',
        description: ' объяснение',
      },
    ],
    about: {
      quote:
        'Мне интереснее всего – человек и жизнь, с которой он встречается.',
      text: 'В свою профессию я пришла случайно, но осталась в ней по любви. Призналась себе, что слушать и слышать у меня получается намного лучше многого другого, а из всего, что меня окружает мне интереснее всего – человек и жизнь, с которой он встречается. ',
    },
    diploma: ['/img/pages/team/diploma1.png', '/img/pages/team/diploma2.png'],
  },
];

export default function Page() {
  const router = useRouter();
  const [psychologist, setPsychologist] = useState(
    psychoList.find((item: any) => item.id == router.query.id)
  );
  useEffect(() => {
    console.log(router.query.id);
    console.log(psychologist);
  });
  useEffect(() => {
    setPsychologist(psychoList.find((item: any) => item.id == router.query.id));
  }, [router.query.id]);
  return (
    <div className={style.dynamic}>
      {psychologist === undefined && <NotFoundPage />}
      {(psychologist?.id === 0 || psychologist?.id) && (
        <div className={style.dynamic__container}>
          <Cover props={psychologist} />
          <h4 className={style.dynamic__container__head}>О психологе</h4>
          <div className={style.dynamic__container__about}>
            <Education props={psychologist?.education} />
            <Experience props={psychologist?.workExperience} />
            <Specialization props={psychologist?.tags} />
            <Methods props={psychologist?.methods} />
            <About props={psychologist?.about} />
            <Diploma props={psychologist?.diploma} />
            {/* Нужно доваить комментарии пагинация*/}
            <Popular />
          </div>
        </div>
      )}
    </div>
  );
}
