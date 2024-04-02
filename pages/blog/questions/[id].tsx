import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BlogLayout from '../layout';
import style from './Answer.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';

// export const getStaticPaths = (async () => {
//   const res = await fetch('http://77.232.128.234:1337/api/questions');
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
//   const res = await fetch('http://77.232.128.234:1337/api/questions');
//   const repo = await res.json();
//   return { props: { repo } };
// }) satisfies GetStaticProps<{
//   repo: any;
// }>;

export default function Answer() {
  // const router = useRouter();
  // const [answer, setAnswer] = useState<any>();
  // useEffect(() => {
  //   const found = repo?.data.find((el: any) => el.id == router.query.id);
  //   setAnswer(found);
  //   console.log(found);
  //   console.log(answer);
  // }, [repo]);
  return (
    <BlogLayout>
      <h1>hi</h1>
      {/* <div className={style.ans}>
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
          {answer?.attributes.themes.map((item: string, idx: number) => (
            <span key={idx} className={style.ans__themes__item}>
              {item}
            </span>
          ))}
        </div>

        <h2 className={style.ans__head}>{answer?.attributes.Title}</h2>
        <div className={style.ans__client}>
          <Image
            src={'http://77.232.128.234:1337/uploads/Group_2991_ed21709b72.svg'}
            alt="client"
            width={64}
            height={64}
            className={style.ans__client__img}
          />
          <div className={style.ans__client__shortcut}>
            <p className={style.ans__client__shortcut__name}>
              {answer?.attributes.clientName}
            </p>
            <p className={style.ans__client__shortcut__status}>
              {answer?.attributes.clientStatus}
            </p>
          </div>
        </div>
        <div className={style.ans__question}>
          {answer?.attributes.question.map((item: any, idx: number) => {
            return item.children.map((childText: any, idChildText: number) => (
              <p key={idx} className={style.ans__question__text}>
                {childText.text}
              </p>
            ));
          })}
        </div>
        <div className={style.ans__answer}>
          <Image
            src={answer?.attributes.answerImg}
            alt="ans"
            width={64}
            height={64}
            className={style.ans__answer__img}
          />
          <div className={style.ans__answer__info}>
            <div className={style.ans__answer__info__fio}>
              <span className={style.ans__answer__info__fio__name}>
                {answer?.attributes.answerFIO}
              </span>
            </div>
            <p className={style.ans__answer__info__status}>
              {answer?.attributes.answerStatus}
            </p>
            <p className={style.ans__answer__info__text}>
              {answer?.attributes.answerText.map((item: any, idx: number) => {
                return item.children.map(
                  (childText: any, childId: number) => childText.text
                );
              })}
              ...{' '}
              <button className={style.ans__answer__info__text__open}>
                Развернуть
              </button>
            </p>
          </div>
        </div>
      </div> */}
    </BlogLayout>
  );
}
