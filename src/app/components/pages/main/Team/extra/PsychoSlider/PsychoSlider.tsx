import Psychologist from '../../../../../ui/Psychologist/Psychologist';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import style from './PsychoSlider.module.scss';
import { psychoList } from './psychoList';

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

export default function PsychoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 4,
      spacing: 15,
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
    <>
      <div className={`navigation-wrapper ${style.slider}`}>
        <div ref={sliderRef} className={`keen-slider ${style.slider__wrap}`}>
          {psychoList.map((item: any, index: number) => (
            <div className={`keen-slider__slide ${style.slidepad}`}>
              <Psychologist
                key={index}
                imageUrl={item.imageUrl}
                firstName={item.firstName}
                lastName={item.lastName}
                fields={item.fields}
              />
            </div>
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
    </>
  );
}
