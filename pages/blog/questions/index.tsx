import React from 'react';
import style from './Questions.module.scss';
import BlogLayout from '../layout';
import Link from 'next/link';
import questionList from './questionList';

export default function Questions() {
  const themesList = [
    'Дети',
    'Семья',
    'Личностный рост',
    'Самоопределение',
    'Карьера',
    'Депрессия',
    'Грусть, тоска',
    'Тревога',
    'Прокрастинация',
    'Апатия',
    'Панические атаки',
    'Травмы',
    'Неуверенность в себе',
    'Отношения',
    'Выгорание',
  ];
  interface ICart {
    id: number;
    themes: Array<string>;
    head: string;
    answer: string;
  }
  return (
    <BlogLayout>
      <div className={style.que}>
        {/* <div className={style.que__content}>
          {questionList.map((item: ICart) => (
            <div
              key={item.id}
              className={
                item.id === 1
                  ? style.que__content__item_1
                  : item.id === 2
                  ? style.que__content__item_2
                  : item.id === 3
                  ? style.que__content__item_3
                  : item.id === 4
                  ? style.que__content__item_4
                  : item.id === 5
                  ? style.que__content__item_5
                  : item.id === 6
                  ? style.que__content__item_6
                  : style.que__content__item_7
              }
            >
              <div className={style.que__content__item__themes}>
                {item.themes.map((theme: string, idx: number) => (
                  <span
                    key={idx}
                    className={style.que__content__item__themes__item}
                  >
                    {theme}
                  </span>
                ))}
              </div>
              <h4 className={style.que__content__item__head}>{item.head}</h4>
              <p className={style.que__content__item__answer}>
                {item.answer}...{' '}
              </p>
              <Link
                className={style.que__content__item__link}
                href={`/blog/questions/${item.id}`}
              >
                Читать далее
              </Link>{' '}
            </div>
          ))}
        </div> */}
        <div className={style.test}>
          {/* {questionList.map((item: ICart) => (
            <div key={item.id}>
              <div>
                {item.themes.map((theme: string, idx: number) => (
                  <span key={idx}>{theme}</span>
                ))}
              </div>
              <h4>{item.head}</h4>
              <p>{item.answer}... </p>
              <Link href={`/blog/questions/${item.id}`}>Читать далее</Link>{' '}
            </div>
          ))} */}
          <div className={`${style.griditem} ${style.item1}`}>Item1</div>
          <div className={`${style.griditem} ${style.item2}`}>Item2</div>
          <div className={`${style.griditem} ${style.item3}`}>Item3</div>
          <div className={`${style.griditem} ${style.item4}`}>Item4</div>
          <div className={`${style.griditem} ${style.item5}`}>Item5</div>
          <div className={`${style.griditem} ${style.item6}`}>Item6</div>
          <div className={`${style.griditem} ${style.item7}`}>Item7</div>
          <div className={`${style.griditem} ${style.item1}`}>Item1</div>
          <div className={`${style.griditem} ${style.item2}`}>Item2</div>
          <div className={`${style.griditem} ${style.item3}`}>Item3</div>
          <div className={`${style.griditem} ${style.item4}`}>Item4</div>
          <div className={`${style.griditem} ${style.item5}`}>Item5</div>
          <div className={`${style.griditem} ${style.item6}`}>Item6</div>
          <div className={`${style.griditem} ${style.item7}`}>Item7</div>
        </div>
        <button className={style.que__more}>Показать еще</button>
      </div>
    </BlogLayout>
  );
}
