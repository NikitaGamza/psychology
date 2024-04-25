import React from 'react';
import style from './IntroductionPageComponent.module.scss';
import Image from 'next/image';

export default function IntroductionPageComponent() {
  return (
    <section className={style.introduction}>
      <div className="container">
        <div className={style.introduction__container}>
          <Image
            src={'/img/pages/main/Introduction/bg-mobile.png'}
            alt="bg"
            width={100}
            height={100}
            className={style.introduction__container__bg}
          />
          <div>
            <h1 className={style.introduction__container__head}>
              Поможем найти{' '}
              <span className={style.introduction__container__head_green}>
                твоего психолога!
              </span>
            </h1>
            <p className={style.introduction__container__description}>
              Мы разработали уникальную методику индивидуализированного подбора
              на основе теории скрытых поведенческих факторов, которая поможет
              вам найти психолога, с который вы будете “на одной волне”.
            </p>
            <p className={style.introduction__container__description}>
              Если в вашей жизни есть проблемы, которые мешают вам чувстововать
              счастье, полноту, радость, благодарность каждый день - возможно,
              вы просто не нашли своего психолога:)
            </p>
          </div>

          <div className={style.introduction__container__buttons}>
            <button className={style.btn_green}>Подобрать психолога</button>
            <button className={style.btn_tg}>
              <span className={style.btn_tg__icon}></span>
              <span className={style.btn_tg__text}>Задать вопрос</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
