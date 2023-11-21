import style from './Courses.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

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

export default function Courses() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 2,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1232px)': {
        slides: {
          perView: 1,
        },
      },
    },
    created() {
      setLoaded(true);
    },
  });
  const courseList = [
    {
      imgUrl: '/img/pages/main/Courses/blank.png',
      imgHorizontUrl: '/img/pages/main/Courses/blank-horizont.png',
      topics: ['Курс', 'Отношения'],
      head: 'Искусство быть вместе. Большой практический курс о партнёрских отношениях',
      startDate: '15 апреля',
      duralation: 2,
      day: 'По четвергам',
      time: '19:00',
      type: 'Очно',
      address: 'Московский проспект, д.6, БЦ Корона',
      price: 2500,
    },
    {
      imgUrl: '/img/pages/main/Courses/blank.png',
      imgHorizontUrl: '/img/pages/main/Courses/blank-horizont.png',
      topics: ['Курс', 'Отношения'],
      head: 'Искусство быть вместе. Большой практический курс о партнёрских отношениях',
      startDate: '15 апреля',
      duralation: 2,
      day: 'По четвергам',
      time: '19:00',
      type: 'Очно',
      address: 'Московский проспект, д.6, БЦ Корона',
      price: 2500,
    },
    {
      imgUrl: '/img/pages/main/Courses/blank.png',
      imgHorizontUrl: '/img/pages/main/Courses/blank-horizont.png',
      topics: ['Курс', 'Отношения'],
      head: 'Искусство быть вместе. Большой практический курс о партнёрских отношениях',
      startDate: '15 апреля',
      duralation: 2,
      day: 'По четвергам',
      time: '19:00',
      type: 'Очно',
      address: 'Московский проспект, д.6, БЦ Корона',
      price: 2500,
    },
    {
      imgUrl: '/img/pages/main/Courses/blank.png',
      imgHorizontUrl: '/img/pages/main/Courses/blank-horizont.png',
      topics: ['Курс', 'Отношения'],
      head: 'Искусство быть вместе. Большой практический курс о партнёрских отношениях',
      startDate: '15 апреля',
      duralation: 2,
      day: 'По четвергам',
      time: '19:00',
      type: 'Очно',
      address: 'Московский проспект, д.6, БЦ Корона',
      price: 2500,
    },
    {
      imgUrl: '/img/pages/main/Courses/blank.png',
      imgHorizontUrl: '/img/pages/main/Courses/blank-horizont.png',
      topics: ['Курс', 'Отношения'],
      head: 'Искусство быть вместе. Большой практический курс о партнёрских отношениях',
      startDate: '15 апреля',
      duralation: 2,
      day: 'По четвергам',
      time: '19:00',
      type: 'Очно',
      address: 'Московский проспект, д.6, БЦ Корона',
      price: 2500,
    },
  ];
  return (
    <section className={style.courses}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Курсы по психологии</h2>
            <p className="section__head__subtitle">Какой то текст сюда</p>
          </div>
          <>
            <div className={`navigation-wrapper ${style.courses__slider}`}>
              <div
                ref={sliderRef}
                className={`keen-slider ${style.courses__slider__wrap}`}
              >
                {courseList.map((item: any, idx: number) => (
                  // <p className="keen-slider__slide">hi</p>
                  <Cart key={idx} item={item} />
                ))}
              </div>
              {loaded && instanceRef.current && (
                <div className={style.courses__arrows}>
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
          <button className={`button_green ${style.courses__all}`}>
            Смотреть все курсы
          </button>
        </div>
      </div>
    </section>
  );
}
