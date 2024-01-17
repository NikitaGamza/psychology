import React from 'react';
import BlogLayout from '../layout';
import style from './Video.module.scss';
import Link from 'next/link';

interface IVideo {
  id: number;
  videoUrl: string;
  themes: Array<string>;
  head: string;
}

export default function Video() {
  const videoList = [
    {
      id: 1,
      videoUrl: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
      themes: ['Отношения', 'Семья'],
      head: 'Как стать хорошим психологом?',
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/embed/FtpN8QI9PuA?si=ia8ZYfeKJ2bLHHR5',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 3,
      videoUrl: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 4,
      videoUrl: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 5,
      videoUrl: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 6,
      videoUrl: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 7,
      videoUrl: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 8,
      videoUrl: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      id: 9,
      videoUrl: 'https://youtube.com/embed/zpOULjyy-n8?rel=0',
      themes: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
  ];
  return (
    <BlogLayout>
      <div className={style.video}>
        <div className={style.video__content}>
          {videoList.map((item: IVideo, idx: number) => (
            <div key={idx} className={style.video__content__item}>
              <Link href={`/blog/video/${item.id}`}>
                <iframe
                  className={style.video__content__item__video}
                  src={item.videoUrl}
                ></iframe>
              </Link>

              <div className={style.video__content__item__themes}>
                {item.themes.map((topic: string, topicIdx: number) => (
                  <span
                    key={topicIdx}
                    className={style.video__content__item__themes__item}
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <Link href={`/blog/video/${item.id}`}>
                <h5 className={style.video__content__item__head}>
                  {item.head}
                </h5>
              </Link>
            </div>
          ))}
        </div>
        <button className={style.video__more}>Показать еще</button>
      </div>
    </BlogLayout>
  );
}
