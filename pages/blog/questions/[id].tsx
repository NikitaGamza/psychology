import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BlogLayout from '../layout';
import style from './Answer.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Answer() {
  const ansList = [
    {
      id: 1,
      themes: ['Психология', 'Терапия'],
      quest: 'Как стать хорошим психологом?',
      imgUrl: '/img/pages/blog/clinet.svg',
      name: 'Ирина',
      status: 'Клиент',
      text: [
        'Доброго времени суток!',
        'Мне 33 года, образование техническое. Работа моя по своей сути скучна и однообразна, но вокруг находятся разные и интересные люди. Мне хочется разнообразить свою деятельность и в процессе работы наблюдать за людьми. Хочется стать хорошим психологом, уметь "считывать" страхи, опасения, намерения людей. Уметь от негатива защищаться, гасить его, негативную посылы людей трансформировать в позитивные и направлять в доброе русло.',
        'Людям, несущим позитив хочется помогать, избавлять от страхов и неуверенности.И делать это не грубыми методиками "под одну гребенку", а с помощью простых дружеских бесед и прочими "незаметными" способами.',
        'Вокруг ооочень много разной литературы, я просто теряюсь и не знаю с чего начать! Наверное с себя? Посоветуйте, пожалуйста, литературу? Простую, для новичков, без сложной профессиональной терминологии. Слышала что стать хорошим психологом можно читая и анализируя классическую литературу. Какие именно произведения? Буду благодарна за любые советы и рекомендации!',
      ],
      answer: {
        imgUrl: '/img/pages/blog/batamirov.svg',
        firstName: 'Игорь',
        lastName: 'Батамиров',
        status: 'Психолог',
        text: 'Если говорить просто то: "учиться учиться и еще раз учиться". Но, если говорить более серьезно, то конечно чтение специальной литературы - да, это основы основ и от этого никуда не денешься. Общепризнанных классиков психологии и психиатрии, Ганнушкина, например. Но понимаете, необходимо просто чтение и просто изучение чем то дополнять. Поэтому важно быть наблюдательным. В жизни, вокруг нас самих, порой происходит масса занимательных с психологической точки зрения вещей, причем происходит как в жизни отдельных',
      },
    },
  ];
  const router = useRouter();
  const [question, setQuestion] = useState<any>();
  useEffect(() => {
    setQuestion(ansList.find((item: any) => item.id == router.query.id));
  });
  useEffect(() => {
    setQuestion(ansList.find((item: any) => item.id == router.query.id));
  }, [router.query.id]);
  return (
    <BlogLayout>
      <div className={style.ans}>
        <Link href={'/blog/questions'} className={style.ans__back}>
          <Image
            src={'/img/icons/arrows/arrow-left-green.svg'}
            alt="back"
            width={10}
            height={7}
            className={style.ans__back__img}
          />
          <span className={style.ans__back__text}>Назад</span>
        </Link>
        <div className={style.ans__themes}>
          {question?.themes.map((item: string, idx: number) => (
            <span key={idx} className={style.ans__themes__item}>
              {item}
            </span>
          ))}
        </div>
        <h2 className={style.ans__head}>{question?.quest}</h2>
        <div className={style.ans__client}>
          <Image
            src={question?.imgUrl}
            alt="client"
            width={64}
            height={64}
            className={style.ans__client__img}
          />
          <div className={style.ans__client__shortcut}>
            <p className={style.ans__client__shortcut__name}>
              {question?.name}
            </p>
            <p className={style.ans__client__shortcut__status}>
              {question?.status}
            </p>
          </div>
        </div>
        <div className={style.ans__question}>
          {question?.text.map((item: string, idx: number) => (
            <p key={idx} className={style.ans__question__text}>
              {item}
            </p>
          ))}
        </div>
        <div className={style.ans__answer}>
          <Image
            src={question?.answer.imgUrl}
            alt="ans"
            width={64}
            height={64}
            className={style.ans__answer__img}
          />
          <div className={style.ans__answer__info}>
            <div className={style.ans__answer__info__fio}>
              <span className={style.ans__answer__info__fio__name}>
                {question?.answer.firstName}
              </span>
              <span className={style.ans__answer__info__fio__name}>
                {question?.answer.lastName}
              </span>
            </div>
            <p className={style.ans__answer__info__status}>
              {question?.answer.status}
            </p>
            <p className={style.ans__answer__info__text}>
              {question?.answer.text}...{' '}
              <button className={style.ans__answer__info__text__open}>
                Развернуть
              </button>
            </p>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
