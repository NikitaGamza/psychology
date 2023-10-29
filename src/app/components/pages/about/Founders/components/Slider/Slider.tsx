import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import style from './Slider.module.scss';
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
        <Cart
          imgUrl={'/img/pages/about/Krytov.png'}
          fio={'Дмитрий Крутов'}
          job="Клинический психолог, психотерапевт, основатель Твой Психолог"
          text="Считаю, что в SMM главное — это диалог с клиентом. От того, насколько грамотно вы построите коммуникацию, будет зависеть успех всей кампании. Хороший специалист должен стать бизнес-партнером для клиента. Также и на курсах, чтобы обучение было эффективным, я выстраиваю диалог со студентами"
        />
        <Cart
          imgUrl="/img/pages/about/Popova.png"
          fio="Анастасия Попова"
          job="Клинический психолог, психотерапевт, основатель Твой Психолог"
          text="Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому,
              нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому."
        />
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
