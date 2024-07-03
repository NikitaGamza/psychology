import React from 'react';
import style from './Difference.module.scss';

export default function Difference() {
  return (
    <section className={style.dif}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">
              Чем мы отличаемся от других
            </h2>
          </div>
          <div className={style.dif__content}>
            <div className={style.cart}>
              <div>
                <div className={style.cart__num}>1</div>
              </div>
              <div className={style.cart__info}>
                <h2 className={style.cart__info__head}>
                  В нашей команде работают только опытные профессионалы
                </h2>
                <p className={style.cart__info__text}>
                  В нашей команде нет студентов и начинающих специалистов,
                  только опытные психологи и психотерапевты
                </p>
              </div>
            </div>
            <div className={style.cart}>
              <div>
                <div className={style.cart__num}>2</div>
              </div>
              <div className={style.cart__info}>
                <h2 className={style.cart__info__head}>
                  С нами у вас есть возможность очных консультаций в том городе,
                  где вы проживаете
                </h2>
                <p className={style.cart__info__text}>
                  В случае, если специалист также живёт в этом городе или готов
                  приехать
                </p>
              </div>
            </div>
            <div className={style.cart}>
              <div>
                <div className={style.cart__num}>3</div>
              </div>
              <div className={style.cart__info}>
                <h2 className={style.cart__info__head}>
                  Комплексная проработка проблемы с профессионалами превентивной
                  медицины
                </h2>
                <p className={style.cart__info__text}>
                  При необходимости к работе с Вами подключаются нутрициологи,
                  диетологии, эндокринологи, тренеры и другие специалисты
                </p>
              </div>
            </div>
            <div className={style.cart}>
              <div>
                <div className={style.cart__num}>4</div>
              </div>
              <div className={style.cart__info}>
                <h2 className={style.cart__info__head}>
                  Мы участвуем в благотворительных проектах
                </h2>
                <p className={style.cart__info__text}>
                  Каждый месяц часть доходов мы с радостью отправляем в
                  благотвориетльные проекты
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
