import React, { useEffect, useState } from 'react';
import style from './Advice.module.scss';
import BlogLayout from '../layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Advice() {
  const [suggestList, setSuggestList] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/advices?populate=*`
      );
      const repo = await res.json();
      setSuggestList(repo.data);
    }
    hiData();
  }, []);
  return (
    <BlogLayout>
      <div className={style.ad}>
        <div className={style.ad__content}>
          {suggestList &&
            suggestList?.map((item: any) => (
              <div key={item.id} className={style.ad__content__item}>
                <Image
                  src={`http://77.232.128.234:1337${item.attributes.adviceImg.data.attributes.url}`}
                  alt="img"
                  width={395}
                  height={222}
                  className={style.ad__content__item__img}
                />
                <div className={style.ad__content__item__themes}>
                  {item.attributes.themes.data.map(
                    (topic: any, idx: number) => (
                      <span
                        key={idx}
                        className={style.ad__content__item__themes__item}
                      >
                        {topic.attributes.themeName}
                      </span>
                    )
                  )}
                </div>
                <Link
                  href={`/blog/advice/${item.id}`}
                  className={style.ad__content__item__head}
                >
                  {item.attributes.title}
                </Link>
              </div>
            ))}
        </div>
        <button className={style.ad__more}>Показать еще</button>
      </div>
    </BlogLayout>
  );
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('http://77.232.128.234:1337/api/advices?populate=*');
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
