import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import style from './Popular.module.scss';
import Psychologist from './components/Psychologist/Psychologist';
import Link from 'next/link';

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <span onClick={props.onClick} className={style.arrow}>
      {props.left && '←'}
      {!props.left && '→'}
    </span>
  );
}

export default function Popular() {
  const [psychoList, setPsychoList] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/psychologists?populate=*&filters[isPopular][$eq]=true`
      );
      const repo = await res.json();
      setPsychoList(repo.data);
      console.log(repo.data);
    }
    hiData();
  }, []);

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
      {psychoList && (
        <div className={`navigation-wrapper ${style.slider}`}>
          <div ref={sliderRef} className={`keen-slider ${style.slider__wrap}`}>
            {psychoList?.map((item: any, index: number) => (
              <Link
                href={`/team/${item.id}`}
                key={index}
                className={`keen-slider__slide ${style.slider__slide}`}
              >
                <Psychologist
                  imageUrl={item.attributes.img.data.attributes.url}
                  firstName={item.attributes.firstName}
                  lastName={item.attributes.lastName}
                  fields={item.attributes.fields.data}
                />
              </Link>
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
                  instanceRef.current.track.details?.slides.length - 1
                }
              />
            </div>
          )}
        </div>
      )}

      {loaded && instanceRef.current && (
        <div className={style.dots}>
          {[
            ...Array(instanceRef.current.track.details?.slides.length).keys(),
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
