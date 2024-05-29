import React, { useEffect, useState } from 'react';
import style from './Questions.module.scss';
import BlogLayout from '../layout';
import Link from 'next/link';

export default function Questions() {
  const [questionList, setQuestionList] = useState<any>();
  const [specThemes, setSpecThemes] = useState<Array<any>>([]);
  const [order, setOrder] = useState<string>('Читаемые');
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/questions?populate=*&sort[0]=id:desc`
      );
      const repo = await res.json();
      setQuestionList(repo.data);
    }
    hiData();
  }, []);
  useEffect(() => {
    async function hiData() {
      if (order == 'Читаемые') {
        const res = await fetch(
          `http://77.232.128.234:1337/api/questions?populate=*&sort[0]=readable:desc`
        );
        const repo = await res.json();
        setQuestionList(repo.data);
      } else {
        const res = await fetch(
          `http://77.232.128.234:1337/api/questions?populate=*&sort[0]=id:desc`
        );
        const repo = await res.json();
        setQuestionList(repo.data);
      }
    }
    hiData();
  }, [order]);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/themes`);
      const repo = await res.json();
      repo.data.map((item: any) => (item.isSelected = false));
      setSpecThemes(repo.data);
      console.log(specThemes);
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
          `http://77.232.128.234:1337/api/questions?populate=*&sort[0]=readable:desc${createReq.join(
            ''
          )}`
        );
        const repo = await res.json();
        setQuestionList(repo.data);
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
          `http://77.232.128.234:1337/api/questions?populate=*&sort[0]=id:desc${createReq.join(
            ''
          )}`
        );
        const repo = await res.json();
        setQuestionList(repo.data);
      }
    }
    hiData();
  }, [specThemes, order]);
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
            {item.attributes.themeName}
          </button>
        ))}
      </div>
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
                <p className={style.grid__item__text}>
                  {item.attributes.questionText}
                </p>
                <Link
                  className={style.grid__item__text__more}
                  href={`/blog/questions/${item.id}`}
                >
                  Читать далее
                </Link>
              </Link>
            ))}
        </div>
        <button className={style.que__more}>Показать еще</button>
      </div>
    </BlogLayout>
  );
}
