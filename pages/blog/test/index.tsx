import React, { useEffect, useState } from 'react';
import BlogLayout from '../layout';
import Head from 'next/head';
import Link from 'next/link';
import style from './Test.module.scss';
// import Markdown from 'react-markdown';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

export default function Test({ posts }: any) {
  useEffect(() => {
    console.log(posts.data);
  });
  return (
    <BlogLayout>
      <Head>
        <title>Блог</title>
      </Head>
      <div className={style.test}>
        <h1>hi</h1>
        {/* {posts.data.map((item: any, idx: number) => (
          <Link
            className={style.test__link}
            key={idx}
            href={`/article/${item.id}`}
          >
            <div>
              {item.attributes.themes.map((topic: string, idTopic: number) => (
                <span key={idTopic}>{topic}</span>
              ))}
            </div>
            <h4>{item.attributes.Title}</h4>
            <p>
              {item.attributes.question.map((paragraph: any, idPar: number) =>
                paragraph.children.map(
                  (child: any, idChild: number) => child.text
                )
              )}
            </p>
          </Link>
        ))} */}
      </div>
    </BlogLayout>
  );
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('http://77.232.128.234:1337/api/questions');
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
