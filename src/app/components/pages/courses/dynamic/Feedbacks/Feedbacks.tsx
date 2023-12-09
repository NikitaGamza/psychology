import React, { useState } from 'react';
import style from './Feedbacks.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Comment from './components/Comment/Comment';

interface IFeed {
  imgUrl: string;
  name: string;
  stars: number;
  publicDate: string;
  text: Array<string>;
}

interface IList {
  feedbacks: Array<IFeed>;
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

export default function Feedbacks(props: IList) {
  const { feedbacks } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className={style.feed}>
      <h2 className={style.feed__head}>Отзывы участников</h2>
      <div className={`navigation-wrapper ${style.slider}`}>
        <div ref={sliderRef} className={`keen-slider ${style.feed__slider}`}>
          {feedbacks.map((item: IFeed, idx: number) => (
            <Comment
              key={idx}
              imgUrl={item.imgUrl}
              name={item.name}
              stars={item.stars}
              text={item.text}
              publicDate={item.publicDate}
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
    </div>
  );
}
