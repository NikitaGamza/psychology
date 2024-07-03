import React, { useEffect } from 'react';
import style from './List.module.scss';
import { courseList } from './courseList';
import Cart from './components/Cart/Cart';

export default function List({ posts }: any) {
  useEffect(() => console.log(posts), [posts]);
  return (
    <div className={style.list}>
      {posts?.data.map((item: any) => (
        <Cart
          key={item.id}
          id={item.id}
          imgUrl={item.attributes.imgMain.data.attributes.url}
          lessonType={item.attributes.course_type.data.attributes.typeName}
          specialization={item.attributes.themes.data}
          name={item.attributes.courseName}
          startDate={item.attributes.startDate}
          duralation={item.attributes.duralation}
          weekDay={item.attributes.weekDay}
          time={item.attributes.time}
          format={item.attributes.format.data.attributes.formatName}
          address={item.attributes.address}
          price={item.attributes.priceFull}
          imgUrlMobile={item.attributes.imgMobile.data.attributes.url}
          themes={item.attributes.themes.data}
        />
      ))}
      <button className={style.list__load}>Показать еще</button>
    </div>
  );
}
