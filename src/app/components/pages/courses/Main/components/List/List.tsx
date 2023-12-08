import React from 'react';
import style from './List.module.scss';
import { courseList } from './courseList';
import Cart from './components/Cart/Cart';

interface ICart {
  id: number;
  imgUrl: string;
  imgUrlMobile: string;
  lessonType: string;
  specialization: Array<string>;
  name: string;
  startDate: string;
  duralation: number;
  weekDay: string;
  time: string;
  format: string;
  address: string;
  price: number;
}

export default function List() {
  return (
    <div className={style.list}>
      {courseList.map((item: ICart, idx: number) => (
        <Cart
          key={idx}
          id={item.id}
          imgUrl={item.imgUrl}
          lessonType={item.lessonType}
          specialization={item.specialization}
          name={item.name}
          startDate={item.startDate}
          duralation={item.duralation}
          weekDay={item.weekDay}
          time={item.time}
          format={item.format}
          address={item.address}
          price={item.price}
          imgUrlMobile={item.imgUrlMobile}
        />
      ))}
      <button className={style.list__load}>Показать еще</button>
    </div>
  );
}
