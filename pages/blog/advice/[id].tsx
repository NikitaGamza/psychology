import React, { useEffect, useState } from 'react';
import style from './Detail.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import BlogLayout from '../layout';
import Banner from './components/Banner/Banner';
import Slider from './components/Slider/Slider';
import Markdown from 'react-markdown';
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';

// export const getStaticPaths = (async () => {
//   const res = await fetch('http://localhost:1337/api/advices?populate=*');
//   const repo = await res.json();
//   return {
//     paths: [
//       {
//         params: {
//           id: `${repo.data[0]}`,
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   };
// }) satisfies GetStaticPaths;

// export const getStaticProps = (async (context) => {
//   const res = await fetch('http://localhost:1337/api/advices?populate=*');
//   const repo = await res.json();
//   return { props: { repo } };
// }) satisfies GetStaticProps<{
//   repo: any;
// }>;

export default function AdviceDetail() {
  // const moreList = [
  //   {
  //     id: 1,
  //     imgUrl: '/img/pages/blog/1.png',
  //     themes: ['Отношения', 'Семья'],
  //     head: 'На что обращать внимание при знакомстве?',
  //   },
  //   {
  //     id: 2,
  //     imgUrl: '/img/pages/blog/3.png',
  //     themes: ['Отношения', 'Семья'],
  //     head: 'На что обращать внимание при знакомстве?',
  //   },
  //   {
  //     id: 3,
  //     imgUrl: '/img/pages/blog/4.png',
  //     themes: ['Отношения', 'Семья'],
  //     head: 'На что обращать внимание при знакомстве?',
  //   },
  // ];
  // const router = useRouter();
  // const [detail, setDetail] = useState<any>();
  // useEffect(() => {
  //   const found = repo?.data.find((el: any) => el.id == router.query.id);
  //   setDetail(found);
  //   console.log(found);
  //   console.log(detail);
  // }, [repo]);
  return (
    <BlogLayout>
      <h1>hi</h1>
      {/* <div className={style.det}>
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
        <div className={style.det__themes}>
          {detail?.attributes.themes.data.map((item: any, idx: number) => (
            <span key={idx} className={style.det__themes__item}>
              {item.attributes.themeName}
            </span>
          ))}
        </div>
        <h2 className={style.det__head}>{detail?.attributes.title}</h2>
        <Image
          src={`http://localhost:1337/${detail?.attributes.adviceImg.data.attributes.url.slice(
            1
          )}`}
          alt="img"
          width={100}
          height={100}
          className={style.det__img}
        />
        <div className={style.det__form}>
          <Image
            src={`http://localhost:1337/${detail?.attributes.authorImg.data.attributes.url.slice(
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
                {detail?.attributes.authorFIO}
              </span>
            </div>
            <p className={style.det__form__info__status}>
              {detail?.attributes.authorStatus}
            </p>
          </div>
        </div>
        <div className={style.det__content}>
          <Markdown>{detail?.attributes.adviceText2}</Markdown>
        </div>
        <Banner />
        <Slider moreList={moreList} />
      </div> */}
    </BlogLayout>
  );
}
