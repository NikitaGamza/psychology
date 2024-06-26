import style from './Charity.module.scss';
import Cart from './components/Cart/Cart';
import { charList } from './charList';
import Slider from './components/Slider/Slider';

export default function Charity() {
  return (
    <section className={style.char}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className={style.char__head}>
              Мы участвуем в благотворительных проектах
            </h2>
          </div>
          <div className={style.char__content}>
            {charList.map((item: any, idx: number) => (
              <Cart props={item} key={idx} />
            ))}
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
