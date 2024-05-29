import React, { useEffect, useState } from 'react';
import style from './Advice.module.scss';
import BlogLayout from '../layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Advice() {
  const [suggestList, setSuggestList] = useState<any>();
  const [specThemes, setSpecThemes] = useState<any>(null);
  const [order, setOrder] = useState<string>('Читаемые');
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
  useEffect(() => {
    async function hiData() {
      if (order == 'Читаемые') {
        const res = await fetch(
          `http://77.232.128.234:1337/api/advices?populate=*&sort[0]=readable:desc`
        );
        const repo = await res.json();
        setSuggestList(repo.data);
      } else {
        const res = await fetch(
          `http://77.232.128.234:1337/api/advices?populate=*&sort[0]=id:desc`
        );
        const repo = await res.json();
        setSuggestList(repo.data);
      }
    }
    hiData();
  }, [order]);
  useEffect(() => {
    async function hiData() {
      if (order == 'Читаемые') {
        let createReq: Array<any> = [];
        specThemes.map((item: any, idx: number) => {
          if (item.isSelected) {
            createReq.push(
              `&filters[$or][${idx}][themes][themeName][$eq]=${item.attributes.themeName}`
            );
          }
        });
        const res = await fetch(
          `http://77.232.128.234:1337/api/advices?populate=*&sort[0]=readable:desc${createReq.join(
            ''
          )}`
        );
        const repo = await res.json();
        suggestList(repo.data);
      } else if (order == 'Новые') {
        let createReq: Array<any> = [];
        specThemes.map((item: any, idx: number) => {
          if (item.isSelected) {
            createReq.push(
              `&filters[$or][${idx}][themes][themeName][$eq]=${item.attributes.themeName}`
            );
          }
        });
        const res = await fetch(
          `http://77.232.128.234:1337/api/advices?populate=*&sort[0]=id:desc${createReq.join(
            ''
          )}`
        );
        const repo = await res.json();
        suggestList(repo.data);
      }
    }
    hiData();
  }, [specThemes, order]);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/themes`);
      const repo = await res.json();
      repo.data?.map((item: any) => (item.isSelected = false));
      setSpecThemes(repo.data);
    }
    hiData();
  }, []);
  function handleToggle(foundId: number) {
    const currentId = specThemes.findIndex((item: any) => item.id === foundId);
    const updatedItem = Object.assign({}, specThemes[currentId]);
    updatedItem.isSelected = !updatedItem.isSelected;
    const newList = specThemes.slice();
    newList[currentId] = updatedItem;
    setSpecThemes(newList);
  }
  return (
    <BlogLayout>
      <div className={style.lay__order}>
        <button
          onClick={() => setOrder('Читаемые')}
          className={
            order == 'Читаемые'
              ? style.lay__order__btn_active
              : style.lay__order__btn
          }
        >
          Самые читаемые
        </button>
        <button
          onClick={() => setOrder('Новые')}
          className={
            order == 'Новые'
              ? style.lay__order__btn_active
              : style.lay__order__btn
          }
        >
          По дате публикации
        </button>
      </div>
      <div className={style.lay__themes}>
        {specThemes?.map((item: any, idx: number) => (
          <button
            key={idx}
            className={
              item.isSelected ? style.lay__item_active : style.lay__item
            }
            onClick={() => handleToggle(item.id)}
          >
            {item.attributes?.themeName}
          </button>
        ))}
      </div>
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
