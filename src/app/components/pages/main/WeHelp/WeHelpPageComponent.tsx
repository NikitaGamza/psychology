import style from './WeHelpPageComponent.module.scss';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

export default function WeHelpPageComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 20,
    },
    created() {
      setLoaded(true);
    },
  });
  const helpList = [
    {
      imgUrl: '/WeHelp/survive.jpg',
      text: 'Пережить психологические травмы и обрести смысл жизни',
    },
    {
      imgUrl: '/WeHelp/serve.jpg',
      text: 'Решить проблемную ситуацию и справиться со стрессом',
    },
    {
      imgUrl: '/WeHelp/back.jpg',
      text: 'Вернуть хорошее настроение и уверенность в себе',
    },
    {
      imgUrl: '/WeHelp/understand.jpg',
      text: 'Разобраться в себе и в своих отношениях с окружающими',
    },
    {
      imgUrl: '/WeHelp/turn.jpg',
      text: 'Стать более эффективными в межличностном взаимодействии',
    },
    {
      imgUrl: '/WeHelp/master.jpg',
      text: 'Освоить навыки эмоциональной саморегуляции',
    },
    {
      imgUrl: '/WeHelp/overcome.jpg',
      text: 'Побороть тревогу, страхи, депрессию',
    },
    {
      imgUrl: '/WeHelp/activate.jpg',
      text: 'Активизировать внутренние ресурсы',
    },
    {
      imgUrl: '/WeHelp/b.jpg',
      text: 'Повысить продуктивность и добиться карьерного роста',
    },
  ];
  return (
    <section className={style.help}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Мы поможем вам</h2>
            <p className="section__head__subtitle">
              Мы помогаем решить многие психологические проблемы
            </p>
          </div>
          <div className={style.help__content}>
            {helpList.map((item, idx) => (
              <div key={idx} className={style.help__content__item}>
                <Image
                  src={item.imgUrl}
                  alt={item.imgUrl}
                  width={330}
                  height={330}
                  className={style.help__content__item__img}
                />
                <p className={style.help__content__item__text}>{item.text}</p>
              </div>
            ))}
          </div>
          {/* SLIDE */}
          <div className={`navigation-wrapper ${style.slider}`}>
            <div
              ref={sliderRef}
              className={`keen-slider ${style.slider__wrap}`}
            >
              {helpList.map((item, idx) => (
                <div
                  key={idx}
                  className={`keen-slider__slide ${style.help__content__item}`}
                >
                  <Image
                    src={item.imgUrl}
                    alt={item.imgUrl}
                    width={330}
                    height={330}
                    className={style.help__content__item__img}
                  />
                  <p className={style.help__content__item__text}>{item.text}</p>
                </div>
              ))}
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
          </div>
        </div>
      </div>
    </section>
  );
}
