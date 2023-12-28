import React from 'react';
import style from './Advice.module.scss';
import BlogLayout from '../layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Advice() {
  const firstList = [
    {
      id: 1,
      imgUrl: '/img/pages/blog/1.png',
      themes: ['Отношения', 'Семья'],
      head: 'Как мы искали себя и свои отношения',
    },
    {
      id: 2,
      imgUrl: '/img/pages/blog/2.png',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
  ];
  const secondList = [
    {
      id: 3,
      imgUrl: '/img/pages/blog/3.png',
      themes: ['Отношения', 'Семья'],
      head: 'Как мы искали себя и свои отношения',
    },
    {
      id: 4,
      imgUrl: '/img/pages/blog/4.png',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 5,
      imgUrl: '/img/pages/blog/5.png',
      themes: ['Отношения', 'Семья'],
      head: 'Как мы искали себя и свои отношения',
    },
    {
      id: 6,
      imgUrl: '/img/pages/blog/6.png',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 7,
      imgUrl: '/img/pages/blog/7.png',
      themes: ['Отношения', 'Семья'],
      head: 'Как мы искали себя и свои отношения',
    },
    {
      id: 8,
      imgUrl: '/img/pages/blog/8.png',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
  ];
  return (
    <BlogLayout>
      <div className={style.ad}>
        <div className={style.ad__content}>
          <div className={style.ad__content__first}>
            {firstList.map((item: any) => (
              <div
                key={item.id}
                className={
                  item.id === 1
                    ? style.ad__content__first_1
                    : style.ad__content__first_2
                }
              >
                <Image
                  src={item.imgUrl}
                  alt="img"
                  width={813}
                  height={457}
                  className={style.ad__content__item__img}
                />
                <div className={style.ad__content__item__themes}>
                  {item.themes.map((topic: string, idx: number) => (
                    <span
                      key={idx}
                      className={style.ad__content__item__themes__item}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/advice/${item.id}`}
                  className={style.ad__content__item__head}
                >
                  {item.head}
                </Link>
              </div>
            ))}
          </div>
          {secondList.map((item: any) => (
            <div key={item.id} className={style.ad__content__item}>
              <Image
                src={item.imgUrl}
                alt="img"
                width={395}
                height={222}
                className={style.ad__content__item__img}
              />
              <div className={style.ad__content__item__themes}>
                {item.themes.map((topic: string, idx: number) => (
                  <span
                    key={idx}
                    className={style.ad__content__item__themes__item}
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/advice/${item.id}`}
                className={style.ad__content__item__head}
              >
                {item.head}
              </Link>
            </div>
          ))}
        </div>
        <button className={style.ad__more}>Показать еще</button>
      </div>
    </BlogLayout>
  );
}
