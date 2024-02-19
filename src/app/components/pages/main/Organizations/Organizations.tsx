import style from './Organizations.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import { orgList } from './orgList';
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
export default function Organizations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 4,
      spacing: 10,
    },
    breakpoints: {
      '(max-width: 1232px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      '(max-width: 768px)': {
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
    <section className={style.org}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">
              Организации, с которыми сотрудничают наши психологи и
              психотерапевты
            </h2>
          </div>
          <>
            <div className={`navigation-wrapper ${style.org__slider}`}>
              <div
                ref={sliderRef}
                className={`keen-slider ${style.org__slider__wrap}`}
              >
                {orgList.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className={`keen-slider__slide ${style.org__slider__wrap__item}`}
                  >
                    <Cart item={item} />
                  </div>
                ))}
              </div>
              {loaded && instanceRef.current && (
                <div className={style.org__arrows}>
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
    </section>
  );
}
