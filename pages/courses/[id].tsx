import React, { useState, useEffect } from 'react';
import style from './Courses.module.scss';
import { useRouter } from 'next/router';
import Cover from '@/app/components/pages/courses/dynamic/Cover/Cover';
import About from '@/app/components/pages/courses/dynamic/About/About';
import FitFor from '@/app/components/pages/courses/dynamic/FitFor/FitFor';
import Learn from '@/app/components/pages/courses/dynamic/Learn/Learn';
import Program from '@/app/components/pages/courses/dynamic/Propgram/Program';
import Speakers from '@/app/components/pages/courses/dynamic/Speakers/Speakers';
import Feedbacks from '@/app/components/pages/courses/dynamic/Feedbacks/Feedbacks';
import Payment from '@/app/components/pages/courses/dynamic/Payment/Payment';
export default function Page() {
  const router = useRouter();
  const [course, setCourse] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://localhost:1337/api/courses/${router.query.id}?populate[0]=imgMain&populate[1]=imgMobile&populate[2]=course_fit_fors.img&populate[3]=course_type&populate[4]=themes&populate[5]=format&populate[6]=learn&populate[7]=program&populate[8]=psychologists.fields&populate[9]=psychologists.img`
      );
      const repo = await res.json();
      await setCourse(repo);
      console.log(course);
    }
    hiData();
  }, [router.query.id]);
  return (
    <div className={style.dynamic}>
      <div className="container">
        {(course?.data?.id === 0 || course?.data?.id) && (
          <>
            <Cover
              imgMain={course.data.attributes.imgMain.data.attributes.url}
              imgMobile={course.data.attributes.imgMobile.data.attributes.url}
              course_type={
                course.data.attributes.course_type.data.attributes.typeName
              }
              themes={course.data.attributes.themes.data}
              courseName={course.data.attributes.courseName}
              courseDescription={course.data.attributes.courseDescription}
              format={course.data.attributes.format.data.attributes.formatName}
              startDate={course.data.attributes.startDate}
              duralation={course.data.attributes.duralation}
              weekDay={course.data.attributes.weekDay}
              time={course.data.attributes.time}
              address={course.data.attributes.address}
            />
            <About
              about={course.data.attributes.about}
              aboutMediaLink={course.data.attributes.aboutMediaLink}
            />
            <div className={style.dynamic__content}>
              <FitFor fitFor={course.data.attributes.course_fit_fors.data} />
              <Learn learn={course.data.attributes.learn} />
              <Program
                duralation={course.data.attributes.duralation}
                program={course.data.attributes.program}
              />
              <Speakers speakers={course.data.attributes.psychologists.data} />
            </div>
          </>
        )}
      </div>
      <Payment
        priceFull={course?.data?.attributes.priceFull}
        priceMonth={course?.data?.attributes.priceMonth}
        place={course?.data?.attributes.freePlace}
        startDate={course?.data?.attributes.startDate}
      />
    </div>
  );
}
