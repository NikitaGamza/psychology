import React from 'react';
import style from './style/Faq.module.scss';
import { faqList } from './faqList';
import Item from '@/app/components/pages/faq/Item/Item';

export default function Faq() {
  return (
    <div className={style.faq}>
      <div className="container">
        <h2 className={style.faq__head}>Ваши вопросы</h2>
        <div className={style.faq__list}>
          {faqList.map((item: any, idx: number) => (
            <Item key={idx} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
