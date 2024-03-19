import React, { useEffect, useState } from 'react';
import style from './Speakers.module.scss';
import Image from 'next/image';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

interface ISpeaker {
  imgUrl: string;
  firstName: string;
  lastName: string;
  achievements: Array<string>;
}
interface IList {
  speakers: Array<ISpeaker>;
}

export default function Speakers(props: any) {
  const { speakers } = props;
  useEffect(() => console.log(speakers));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 550px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(max-width: 355px)': {
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
    <div className={style.speak}>
      <h2 className={style.speak__head}>Спикеры</h2>
      <div className={style.speak__content}>
        {speakers &&
          speakers.map((item: any) => (
            <div key={item.id} className={style.speak__content__item}>
              <Image
                src={`http://localhost:1337/${item.attributes.img?.data.attributes.url.slice(
                  1
                )}`}
                alt="speaker"
                width={214}
                height={241}
                className={style.speak__content__item__img}
              />
              <h4 className={style.speak__content__item__firstname}>
                {item.attributes.firstName}
              </h4>
              <h4 className={style.speak__content__item__lastname}>
                {item.attributes.lastName}
              </h4>
              {item.attributes.fields?.data.map((award: any, index: number) => (
                <span key={index} className={style.speak__content__item__award}>
                  {award.attributes.name}.{' '}
                </span>
              ))}
            </div>
          ))}
      </div>
      <div className={`navigation-wrapper ${style.slider}`}>
        <div ref={sliderRef} className={`keen-slider ${style.slider__wrap}`}>
          {speakers.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`keen-slider__slide ${style.speak__content__item}`}
            >
              <Image
                src={`http://localhost:1337/${item.attributes.img?.data.attributes.url.slice(
                  1
                )}`}
                alt="speaker"
                width={214}
                height={241}
                className={style.speak__content__item__img}
              />
              <h4 className={style.speak__content__item__firstname}>
                {item.attributes.firstName}
              </h4>
              <h4 className={style.speak__content__item__lastname}>
                {item.attributes.lastName}
              </h4>
              {item.attributes.fields?.data.map((award: any, index: number) => (
                <span key={index} className={style.speak__content__item__award}>
                  {award.attributes.name}.{' '}
                </span>
              ))}
            </div>
          ))}
        </div>
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
