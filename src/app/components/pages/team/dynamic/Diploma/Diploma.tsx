import React, { useEffect, useState } from 'react';
import style from './Diploma.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

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
export default function Diploma({ props }: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 2,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 844px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      '(max-width: 600px)': {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className={style.dipl}>
      <h5 className={style.dipl__head}>Дипломы и сертификаты</h5>
      <div className={style.dipl__content}>
        <>
          <div className={`navigation-wrapper ${style.dipl__content__slider}`}>
            <div
              ref={sliderRef}
              className={`keen-slider ${style.dipl__content__slider__wrap}`}
            >
              {props.map((item: any) => (
                <div
                  key={item.id}
                  className={`keen-slider__slide ${style.dipl__content__slider__wrap__slide}`}
                >
                  <Image
                    src={`http://${process.env.NEXT_PUBLIC_SERVER}:1337/${item.attributes.url.slice(
                      1
                    )}`}
                    alt={item.attributes.url}
                    width={394}
                    height={285}
                    className={style.dipl__content__slider__wrap__slide__img}
                  />
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <div className={style.dipl__content__arrows}>
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
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      style.dots__item +
                      (currentSlide === idx
                        ? ` ${style.dots__item_active}`
                        : '')
                    }
                  ></button>
                );
              })}
            </div>
          )}
        </>
      </div>
    </div>
  );
}
