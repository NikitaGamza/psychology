import React from 'react';
import Psychologist from '../ui/Psychologist/Psychologist';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* <button onClick={() => swiper.slideNext()}>
          Slide to the next slide
        </button> */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
