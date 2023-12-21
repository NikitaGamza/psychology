import React, { useEffect, useState } from 'react';
import BlogLayout from '../layout';
import style from './Detail.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { videoList } from './videoList';
import Slider from './components/Slider/Slider';

export default function VideoDetail() {
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
        <Link href={'/blog/advice'} className={style.det__back}>
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
            {video.themes.map((item: string, idx: number) => (
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
