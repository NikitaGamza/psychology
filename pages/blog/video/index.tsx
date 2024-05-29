import React, { useState, useEffect } from 'react';
import BlogLayout from '../layout';
import style from './Video.module.scss';
import Link from 'next/link';

export default function Video() {
  const [videoList, setVideoList] = useState<any>();
  const [order, setOrder] = useState<string>('Читаемые');
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
  useEffect(() => {
    async function hiData() {
      if (order == 'Читаемые') {
        const res = await fetch(
          `http://77.232.128.234:1337/api/videos?populate=*&sort[0]=readable:desc`
        );
        const repo = await res.json();
        setVideoList(repo.data);
      } else {
        const res = await fetch(
          `http://77.232.128.234:1337/api/videos?populate=*&sort[0]=id:desc`
        );
        const repo = await res.json();
        setVideoList(repo.data);
      }
    }
    hiData();
  }, [order]);
  const [specThemes, setSpecThemes] = useState<any>(null);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/themes`);
      const repo = await res.json();
      repo.data?.map((item: any) => (item.isSelected = false));
      setSpecThemes(repo.data);
    }
    hiData();
  }, []);
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
          `http://77.232.128.234:1337/api/videos?populate=*&sort[0]=readable:desc${createReq.join(
            ''
          )}`
        );
        const repo = await res.json();
        videoList(repo.data);
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
          `http://77.232.128.234:1337/api/videos?populate=*&sort[0]=id:desc${createReq.join(
            ''
          )}`
        );
        const repo = await res.json();
        videoList(repo.data);
      }
    }
    hiData();
  }, [specThemes, order]);
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
