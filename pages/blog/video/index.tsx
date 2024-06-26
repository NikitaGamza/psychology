import React, { useState, useEffect } from 'react';
import BlogLayout from '../layout';
import style from './Video.module.scss';
import Link from 'next/link';

export default function Video() {
  const [videoList, setVideoList] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/videos?populate=*&sort[0]=id:desc`
      );
      const repo = await res.json();
      setVideoList(repo.data);
    }
    hiData();
  }, []);
  return (
    <BlogLayout>
      <div className={style.video}>
        <div className={style.video__content}>
          {videoList &&
            videoList?.map((item: any) => (
              <div key={item.id} className={style.video__content__item}>
                <Link href={`/blog/video/${item.id}`}>
                  <iframe
                    className={style.video__content__item__video}
                    src={item.attributes.videoLink}
                  ></iframe>
                </Link>
                <div className={style.video__content__item__themes}>
                  {item.attributes.themes.data.map((topic: any) => (
                    <span
                      key={topic.id}
                      className={style.video__content__item__themes__item}
                    >
                      {topic.attributes.themeName}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/video/${item.id}`}>
                  <h5 className={style.video__content__item__head}>
                    {item.attributes.videoName}
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
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('http://localhost:1337/api/videos?populate=*');
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
