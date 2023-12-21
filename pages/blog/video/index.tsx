import React from 'react';
import BlogLayout from '../layout';
import style from './Video.module.scss';
import { themesList } from '../themeList';
import { videoList } from './videoList';
import Link from 'next/link';

interface IVideo {
  id: number;
  videoUrl: string;
  themes: Array<string>;
  head: string;
}

export default function Video() {
  return (
    <BlogLayout>
      <div className={style.video}>
        <h1 className={style.video__head}>Видео</h1>
        <div className={style.video__order}>
          <button className={style.video__order__btn}>Самые читаемые</button>
          <button className={style.video__order__btn}>
            По дате публикации
          </button>
          <button className={style.video__order__btn}>По теме</button>
        </div>
        <div className={style.video__themes}>
          {themesList.map((item: string, idx: number) => (
            <button key={idx} className={style.video__themes__btn}>
              {item}
            </button>
          ))}
        </div>
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
