import React, { useEffect, useState } from 'react';
import style from './Detail.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import BlogLayout from '../layout';
import Banner from './components/Banner/Banner';
import Slider from './components/Slider/Slider';
import Markdown from 'react-markdown';

export default function AdviceDetail() {
  const router = useRouter();
  const [detail, setDetail] = useState<any>();
  const [moreList, setMoreList] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/advices/${router.query.id}?populate=*`
      );
      const repo = await res.json();
      setDetail(repo);
    }
    hiData();
  }, [router.query.id]);
  // useEffect(() => {
  //   async function hiData() {
  //     const res = await fetch(
  //       `http://77.232.128.234:1337/api/advices/${router.query.id}?populate=*`
  //     );
  //     const repo = await res.json();
  //     setDetail(repo);
  //   }
  //   hiData();
  // }, [router.query.id]);
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

        {(detail?.data?.id === 0 || detail?.data?.id) && (
          <>
            <h2>{detail.data.attributes.title}</h2>
            <div className={style.det__themes}>
              {detail?.data.attributes.themes.data.map(
                (item: any, idx: number) => (
                  <span key={idx} className={style.det__themes__item}>
                    {item.attributes.themeName}
                  </span>
                )
              )}
            </div>
            <h2 className={style.det__head}>{detail?.attributes?.title}</h2>
            <Image
              src={`http://77.232.128.234:1337/${detail?.data.attributes.adviceImg.data.attributes.url.slice(
                1
              )}`}
              alt="img"
              width={100}
              height={100}
              className={style.det__img}
            />
            <div className={style.det__form}>
              <Image
                src={`http://77.232.128.234:1337/${detail?.data.attributes.authorImg.data.attributes.url.slice(
                  1
                )}`}
                alt="img"
                width={64}
                height={64}
                className={style.det__form__img}
              />
              <div className={style.det__form__info}>
                <div className={style.det__form__info__fio}>
                  <span className={style.det__form__info__fio__name}>
                    {detail?.data.attributes.authorFIO}
                  </span>
                </div>
                <p className={style.det__form__info__status}>
                  {detail?.data.attributes.authorStatus}
                </p>
              </div>
            </div>
            <div className={style.det__content}>
              <Markdown>{detail?.data.attributes.adviceText}</Markdown>
            </div>
            <Banner />
          </>
        )}

        {/* <Slider moreList={moreList} /> */}
      </div>
    </BlogLayout>
  );
}
