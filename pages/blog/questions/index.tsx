import React from 'react';
import style from './Questions.module.scss';
import BlogLayout from '../layout';
import Link from 'next/link';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

export default function Questions({ posts }: any) {
  return (
    <BlogLayout>
      <div className={style.que}>
        <div className={style.grid}>
          {posts.data.map((item: any, idx: number) => (
            <Link
              className={style.grid__item}
              key={idx}
              href={`/blog/questions/${item.id}`}
            >
              <div className={style.grid__item__themes}>
                {item.attributes.themes.map(
                  (topic: string, idTopic: number) => (
                    <span
                      className={style.grid__item__themes__item}
                      key={idTopic}
                    >
                      {topic}
                    </span>
                  )
                )}
              </div>
              <h4 className={style.grid__item__head}>
                {item.attributes.Title}
              </h4>
            </Link>
          ))}
        </div>
        <button className={style.que__more}>Показать еще</button>
      </div>
    </BlogLayout>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:1337/api/questions');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
