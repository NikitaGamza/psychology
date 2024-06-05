import React from 'react';
import style from './style/Faq.module.scss';
// import { faqList } from './faqList';
import Item from '@/app/components/pages/faq/Item/Item';
import Link from 'next/link';

export default function Faq() {
  const faqList = [
    {
      head: 'Что нужно чтобы оплатить консультацию?',
      description:
        'Познакомитесь с современными исследованиями в области психологии отношений и поймёте, как близость с другим человеком влияет на долголетие, уровень тревоги, удовлетворённость жизнью. Разберётесь, чем отличаются «я + ты» и «мы» подходы к отношениям. Узнаете, как соблюдать баланс между потребностями партнёров.',
    },
    {
      head: 'Вы работаете по предоплате?',
      description:
        'Познакомитесь с современными исследованиями в области психологии отношений и поймёте, как близость с другим человеком влияет на долголетие, уровень тревоги, удовлетворённость жизнью. Разберётесь, чем отличаются «я + ты» и «мы» подходы к отношениям. Узнаете, как соблюдать баланс между потребностями партнёров.',
    },
    {
      head: 'Будет ли комиссия при оплате?',
      description:
        'Познакомитесь с современными исследованиями в области психологии отношений и поймёте, как близость с другим человеком влияет на долголетие, уровень тревоги, удовлетворённость жизнью. Разберётесь, чем отличаются «я + ты» и «мы» подходы к отношениям. Узнаете, как соблюдать баланс между потребностями партнёров.',
    },
  ];
  return (
    <div className={style.faq}>
      <div className="container">
        <h2 className={style.faq__head}>Ваши вопросы</h2>
        <div className={style.faq__list}>
          {faqList.map((item: any, idx: number) => (
            <Item key={idx} props={item} />
          ))}
        </div>
        <div className={style.faq__question}>
          <h2 className={style.faq__question__head}>Напишите нам</h2>
          <p className={style.faq__question__text}>
            Если у вас есть вопросы, можете смело задать их нам в телеграм. Мы
            любим общаться и с удовольствием вам ответим.
          </p>
          <Link href={'https://t.me/'} className={style.btn_tg}>
            <span className={style.btn_tg__icon}></span>
            <span className={style.btn_tg__text}>Задать вопрос</span>
          </Link>
        </div>
      </div>
      {/* <Questions /> */}
    </div>
  );
}
