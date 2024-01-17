import React, { useEffect, useState } from 'react';
import BlogLayout from '../layout';
import style from './Detail.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Slider from './components/Slider/Slider';

export default function VideoDetail() {
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
  const router = useRouter();
  const [video, setVideo] = useState<any>();
  useEffect(() => {
    setVideo(videoList.find((item: any) => item.id == router.query.id));
  });
  useEffect(() => {
    setVideo(videoList.find((item: any) => item.id == router.query.id));
  }, [router.query.id]);
  return (
    <BlogLayout>
      <div className={style.det}>
        <Link href={'/blog/video'} className={style.det__back}>
          <Image
            src={'/img/icons/arrows/arrow-left-green.svg'}
            alt="back"
            width={10}
            height={7}
            className={style.det__back__img}
          />
          <span className={style.det__back__text}>Назад</span>
        </Link>
        <iframe className={style.det__video} src={video?.videoUrl}></iframe>
        <div className={style.det__info}>
          <h3 className={style.det__info__head}>{video?.head}</h3>
          <div className={style.det__info__themes}>
            {video?.themes.map((item: string, idx: number) => (
              <span key={idx} className={style.det__info__themes__item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <Slider moreList={videoList} />
      </div>
    </BlogLayout>
  );
}
