import React from 'react';
import style from './IntroductionPageComponent.module.scss';
import Image from 'next/image';

export default function IntroductionPageComponent() {
  return (
    <section className={style.introduction}>
      <div className="container">
        <div className={style.introduction__container}>
          <div>
            <h1 className={style.introduction__container__head}>
              Поможем найти{' '}
              <span className={style.introduction__container__head_green}>
                твоего психолога
              </span>
            </h1>
            <p className={style.introduction__container__description}>
              Каждый человек рождён быть счастливым и жить в гармонии с этим
              миром. Иногда мы забываем об этом и, растрачивая энергию в погоне
              за мнимыми ценностями, сбиваемся с пути. В эти моменты
              осознанность, любовь, искренность и забота окружающих способны
              помочь человеку снова увидеть свой путь.Если у Вас в жизни такой
              момент, давайте пройдём его вместе!
            </p>
          </div>

          <div className={style.introduction__container__buttons}>
            <button className="button_green">Подобрать психолога</button>
            <button className="button_hover_tg">
              <Image
                src="/telegram-white.svg"
                alt="tg"
                width={40}
                height={40}
              />
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
