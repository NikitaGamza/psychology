import style from './Question.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Question(item: any) {
  const question = item.item;
  const { idx } = item;
  return (
    <div
      className={`${style.question__item} ${
        question.id === 2 && style.question__item_max
      }`}
    >
      <div className={style.question__item__list}>
        {question.topics.map((topic: any, idx: number) => (
          <span key={idx} className={style.question__item__list__topic}>
            {topic}
          </span>
        ))}
      </div>
      <h5 className={style.question__item__head}>{question.head}</h5>
      <p className={style.question__item__text}>
        {idx === 2
          ? `${question.text.slice(0, 363)}...`
          : `${question.text.slice(0, 363)}...`}
      </p>
      <Link href={'#'} className={style.question__item__link}>
        Читать далее
      </Link>
    </div>
  );
}
