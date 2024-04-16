import React, { useEffect, useState } from 'react';
import style from './Questions.module.scss';
import BlogLayout from '../layout';
import Link from 'next/link';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

export default function Questions() {
  const [questionList, setQuestionList] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/questions?populate=*`
      );
      const repo = await res.json();
      setQuestionList(repo.data);
    }
    hiData();
  }, []);
  return (
    <BlogLayout>
      <div className={style.que}>
        <div className={style.grid}>
          {questionList &&
            questionList?.map((item: any, idx: number) => (
              <Link
                className={style.grid__item}
                key={idx}
                href={`/blog/questions/${item.id}`}
              >
                <div className={style.grid__item__themes}>
                  {item.attributes.themes.data.map(
                    (topic: any, idTopic: any) => (
                      <span
                        className={style.grid__item__themes__item}
                        key={idTopic}
                      >
                        {topic.attributes.themeName}
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
