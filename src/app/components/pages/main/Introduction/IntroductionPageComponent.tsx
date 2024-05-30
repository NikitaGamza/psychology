import React from 'react';
import style from './IntroductionPageComponent.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
              В любой ситуации{' '}
              <br className={style.introduction__container__head__br} />
              <span className={style.introduction__container__head_green}>
                твой психолог
              </span>{' '}
              всегда рядом
            </h1>
            <p className={style.introduction__container__description}>
              В какой бы сложной, жизненной ситуации вы не оказались, знайте
              наша команда профессионалных психологов и психотерапевтов всегда
              готовы прийти к вам на помощь - поддержать, разобрать ситуацию и
              найти решение.
            </p>
            <br />
            <p className={style.introduction__container__description}>
              Если в вашей жизни есть проблемы, которые мешают вам чувстововать
              счастье, полноту, радость, благодарность каждый день - возможно,
              вы просто не нашли своего психолога:)
            </p>
          </div>

          <div className={style.introduction__container__buttons}>
            <Link href={'/request-psychologist'} className={style.btn_green}>
              Подобрать психолога
            </Link>
            <Link href={'https://t.me/'} className={style.btn_tg}>
              <span className={style.btn_tg__icon}></span>
              <span className={style.btn_tg__text}>Задать вопрос</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
