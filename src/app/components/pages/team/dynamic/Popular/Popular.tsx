import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import style from './Popular.module.scss';
import Psychologist from './components/Psychologist/Psychologist';

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <span
      onClick={props.onClick}
      className={`${style.arrow} ${!disabeld && style.arrow_next}`}
    >
      {props.left && '←'}
      {!props.left && '→'}
    </span>
  );
}

export default function Popular() {
  const psychoList = [
    {
      imageUrl: '/img/Psychologist/blank.svg',
      firstName: 'Игорь',
      lastName: 'Батамиров',
      format: ['очно', 'онлайн', 'переписка'],
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
      imageUrl: '/img/Psychologist/blank.svg',
      firstName: 'Наталья',
      lastName: 'Петрова',
      format: ['очно', 'онлайн'],
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
      imageUrl: '/img/Psychologist/blank.svg',
      firstName: 'Элина',
      lastName: 'Кроповницкая',
      format: ['онлайн', 'переписка'],
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
      imageUrl: '/img/Psychologist/blank.svg',
      firstName: 'Любовь',
      lastName: 'Иваненко',
      format: ['онлайн', 'переписка'],
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
      imageUrl: '/img/Psychologist/blank.svg',
      firstName: 'Анна',
      lastName: 'Костина',
      format: ['онлайн', 'переписка'],
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
      imageUrl: '/img/Psychologist/blank.svg',
      firstName: 'Леонид',
      lastName: 'Матвеев',
      format: ['онлайн', 'переписка'],
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1232px)': {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      '(max-width: 1000px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(max-width: 715px)': {
        slides: {
          perView: 1,
        },
      },
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className={style.popular}>
      <h5 className={style.popular__head}>Популярные психологи</h5>
      <div className={`navigation-wrapper ${style.slider}`}>
        <div ref={sliderRef} className={`keen-slider ${style.slider__wrap}`}>
          {psychoList.map((item: any, index) => (
            <Psychologist
              key={index}
              imageUrl={item.imageUrl}
              firstName={item.firstName}
              lastName={item.lastName}
              fields={item.fields}
            />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className={style.slider__arrows}>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className={style.dots}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  style.dots__item +
                  (currentSlide === idx ? ` ${style.dots__item_active}` : '')
                }
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
