import React from 'react';
import Psychologist from '../ui/Psychologist/Psychologist';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import style from '../../app/gobals.css'

export default function PsychoSlider() {
  const psychoList = [
    {
      imageUrl: 'Типо картинка',
      firstName: 'Игорь',
      lastName: 'Батамиров',
      workType: ['очно', 'онлайн', 'переписка'],
      fields: ['Психолог', 'семейный психолог', 'к.п.н'],
      feedbacks: ['первый отзыв', 'второй отзыв'],
      experience: 10,
      age: 35,
      sex: true,
      isMarried: true,
      locations: ['Москва', 'Санкт-Петербург'],
      tags: ['Дети', 'Семья', 'Карьера'],
    },
    {
      imageUrl: 'Типо картинка',
      firstName: 'Наталья',
      lastName: 'Петрова',
      workType: ['очно', 'онлайн'],
      fields: ['Психолог', 'к.п.н'],
      feedbacks: ['первый отзыв', 'второй отзыв'],
      experience: 10,
      age: 35,
      sex: false,
      isMarried: true,
      locations: ['Иркутск'],
      tags: [
        'Дети',
        'Семья',
        'Страхи',
        'Грусть, тоска',
        'Самоопределение',
        'Личностный рост',
      ],
    },
    {
      imageUrl: 'Типо картинка',
      firstName: 'Элина',
      lastName: 'Кроповницкая',
      workType: ['онлайн', 'переписка'],
      fields: ['Психолог', 'семейный психолог', 'к.п.н'],
      feedbacks: ['первый отзыв', 'второй отзыв'],
      experience: 10,
      age: 35,
      sex: false,
      isMarried: false,
      locations: ['Москва', 'Санкт-Петербург'],
      tags: ['Дети', 'Семья', 'Карьера'],
    },
    {
      imageUrl: 'Типо картинка',
      firstName: 'Любовь',
      lastName: 'Иваненко',
      workType: ['онлайн', 'переписка'],
      fields: ['Психолог', 'семейный психолог', 'к.п.н'],
      feedbacks: ['первый отзыв', 'второй отзыв'],
      experience: 10,
      age: 35,
      sex: false,
      isMarried: false,
      locations: ['Москва', 'Санкт-Петербург'],
      tags: ['Дети', 'Семья', 'Карьера'],
    },
    {
      imageUrl: 'Типо картинка',
      firstName: 'Анна',
      lastName: 'Костина',
      workType: ['онлайн', 'переписка'],
      fields: ['Психолог', 'семейный психолог', 'к.п.н'],
      feedbacks: ['первый отзыв', 'второй отзыв'],
      experience: 10,
      age: 35,
      sex: false,
      isMarried: false,
      locations: ['Иркутск'],
      tags: ['Дети', 'Семья', 'Карьера'],
    },
    {
      imageUrl: 'Типо картинка',
      firstName: 'Леонид',
      lastName: 'Матвеев',
      workType: ['онлайн', 'переписка'],
      fields: ['Психолог', 'семейный психолог', 'к.п.н'],
      feedbacks: ['первый отзыв', 'второй отзыв'],
      experience: 10,
      age: 35,
      sex: true,
      isMarried: false,
      locations: ['Иркутск'],
      tags: ['Дети', 'Семья', 'Карьера'],
    },
  ];
  return (
    <div className="flex_wrap_spacebetween">
      {psychoList.map((item: any) => (
        <Psychologist
          firstName={item.firstName}
          lastName={item.lastName}
          fields={item.fields}
        />
      ))}
    </div>
  );
}
