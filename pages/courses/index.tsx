import React, { useEffect, useState } from 'react';
import style from './Courses.module.scss';
import Main from '@/app/components/pages/courses/Main/Main';
import Filters from '@/app/components/pages/courses/Filters/Filters';
import Image from 'next/image';
import MobileFilter from '@/app/components/pages/courses/MobileFilter/MobileFilter';

export default function Courses({ posts }: any) {
  const [mobileFilt, setMobileFilt] = useState<boolean>(false);
  const [courseList, setCourseList] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/courses?populate=*`
      );
      const repo = await res.json();
      await setCourseList(repo);
      console.log(courseList);
    }
    hiData();
  }, []);
  return (
    <div className={style.course}>
      <div className="container">
        <h2 className={style.course__head}>Лекторий «Искусство жизни»</h2>
        <div className={style.course__content}>
          <Main posts={courseList} />
        </div>
      </div>
    </div>
  );
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('http://localhost:1337/api/courses?populate=*');
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
