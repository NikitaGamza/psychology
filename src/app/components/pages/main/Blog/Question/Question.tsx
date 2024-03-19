import style from './Question.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Question(item: any, passKey:number) {
  const question = item.item;
  return (
    <div
      className={`${style.question__item} ${
        passKey === 0 && style.question__item_max
      }`}
    >
      <div className={style.question__item__list}>
        {question.attributes.themes?.data.map((topic: any, idx: number) => (
          <span
            key={idx}
            className={style.question__item__list__topic}
          >
            {topic.attributes.themeName}
          </span>
        ))}
      </div>
      <h5 className={style.question__item__head}>{question.attributes.Title}</h5>
      <p className={style.question__item__text}>
        {question.attributes.answerText.slice(0, 363)}...
      </p>
      <Link href={`/blog/questions/${question.id}`} className={style.question__item__link}>
        Читать далее
      </Link>
    </div>
  );
}
