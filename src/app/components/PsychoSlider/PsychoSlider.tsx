import React from 'react';
import Psychologist from '../ui/Psychologist/Psychologist';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

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
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed');
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    // <div className="flex_wrap_spacebetween">
    //   {psychoList.map((item: any, index) => (
    //     <Psychologist
    //       key={index}
    //       firstName={item.firstName}
    //       lastName={item.lastName}
    //       fields={item.fields}
    //     />
    //   ))}
    // </div>
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">1</div>
      <div className="keen-slider__slide">2</div>
      <div className="keen-slider__slide">3</div>
    </div>
  );
}
