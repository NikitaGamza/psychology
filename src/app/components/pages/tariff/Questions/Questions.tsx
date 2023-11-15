import React from 'react';
import style from './Questions.module.scss';
import { questionList } from './questionList';
import Item from './components/Item/Item';

export default function Questions() {
  return (
    <div className={style.quest}>
      <div className="container">
        <h1 className={style.quest__head}>Ваши вопросы</h1>
        <div className={style.quest__list}>
          {questionList.map((item: any, idx: number) => (
            <Item key={idx} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
