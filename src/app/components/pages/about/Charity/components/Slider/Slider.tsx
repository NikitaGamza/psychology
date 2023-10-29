import style from './Slider.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { charList } from '../../charList';
import Cart from '../Cart/Cart';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className={`navigation-wrapper ${style.slider}`}>
      <div ref={sliderRef} className={`keen-slider ${style.slider__wrap}`}>
        {charList.map((item, idx) => (
          <Cart props={item} key={idx} />
        ))}
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
