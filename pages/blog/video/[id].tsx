import React, { useEffect, useState } from 'react';
import BlogLayout from '../layout';
import style from './Detail.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Slider from './components/Slider/Slider';

export default function VideoDetail() {
  const router = useRouter();
  const [detail, setDetail] = useState<any>();
  const [moreList, setMoreList] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/videos/${router.query.id}?populate=*`
      );
      const repo = await res.json();
      setDetail(repo);
      console.log(repo);
    }
    hiData();
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
        <iframe
          className={style.det__video}
          src={detail?.data.attributes.videoLink}
        ></iframe>
        <div className={style.det__info}>
          <h3 className={style.det__info__head}>
            {detail?.data.attributes.videoName}
          </h3>
          <div className={style.det__info__themes}>
            {detail?.data.attributes.themes.data.map((item: any) => (
              <span key={item.id} className={style.det__info__themes__item}>
                {item.attributes.themeName}
              </span>
            ))}
          </div>
        </div>

        {/* <Slider moreList={videoList} /> */}
      </div>
    </BlogLayout>
  );
}
