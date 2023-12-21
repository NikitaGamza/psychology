import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';
import style from './Slider.module.scss';

interface IVideo {
  id: number;
  videoUrl: string;
  themes: Array<string>;
  head: string;
}

interface IList {
  moreList: Array<IVideo>;
}

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

export default function Slider(props: IList) {
  const { moreList } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 4,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 1264px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      '(max-width: 980px)': {
        slides: {
          perView: 2,
          spacing: 24,
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
    <div className={style.more}>
      <h4 className={style.more__head}>Другие видео по теме</h4>
      <div className={`navigation-wrapper ${style.more__slider}`}>
        <div
          ref={sliderRef}
          className={`keen-slider ${style.more__slider__in}`}
        >
          {moreList.map((item: IVideo, idx: number) => (
            <div
              key={idx}
              className={`keen-slider__slide ${style.more__slider__in__slide}`}
            >
              <Link href={`/blog/video/${item.id}`}>
                <iframe
                  className={style.more__slider__in__slide__video}
                  src={item.videoUrl}
                ></iframe>
              </Link>
              <div className={style.more__slider__in__slide__themes}>
                {item.themes.map((topic: string, topicIdx: number) => (
                  <span
                    key={topicIdx}
                    className={style.more__slider__in__slide__themes__item}
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <Link href={`/blog/video/${item.id}`}>
                <h4 className={style.more__slider__in__slide__head}>
                  {item.head}
                </h4>
              </Link>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className={style.more__slider__arrows}>
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
