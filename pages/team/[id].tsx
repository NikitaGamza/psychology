import { useEffect, useState } from 'react';
import style from './Team.module.scss';
import { useRouter } from 'next/router';
// import { psychoList } from './psychologist';
import Cover from '@/app/components/pages/team/dynamic/Cover/Cover';
import Education from '@/app/components/pages/team/dynamic/Education/Education';
import Experience from '@/app/components/pages/team/dynamic/Experience/Experience';
import Specialization from '@/app/components/pages/team/dynamic/Specialization/Specialization';
import Methods from '@/app/components/pages/team/dynamic/Methods/Methods';
import About from '@/app/components/pages/team/dynamic/About/About';
import Diploma from '@/app/components/pages/team/dynamic/Diploma/Diploma';
import Feedbacks from '@/app/components/pages/team/dynamic/Feedbacks/Feedbacks';
import Popular from '@/app/components/pages/team/dynamic/Popular/Popular';
import NotFoundPage from '@/app/not-found';

export default function Page() {
  const router = useRouter();
  const [psychologist, setPsychologist] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://localhost:1337/api/psychologists/${router.query.id}?populate=*`
      );
      const repo = await res.json();
      await setPsychologist(repo);
      console.log(psychologist);
    }
    hiData();
  }, [router.query.id]);
  return (
    <div className={style.dynamic}>
      {/* {psychologist === undefined && <NotFoundPage />} */}
      {(psychologist?.data?.id === 0 || psychologist?.data?.id) && (
        <div className={style.dynamic__container}>
          <Cover props={psychologist} />
          <h4 className={style.dynamic__container__head}>О психологе</h4>
          <div className={style.dynamic__container__about}>
            <Education props={psychologist?.data.attributes.education} />
            <Experience props={psychologist?.data.attributes.experience} />
            <Specialization props={psychologist?.data.attributes.themes.data} />
            <Methods props={psychologist?.data.attributes.methods.data} />
            <About
              aboutQuote={psychologist?.data.attributes.aboutQuote}
              aboutText={psychologist?.data.attributes.aboutText}
            />
            <Diploma props={psychologist?.data.attributes.diploma.data} />
            <Feedbacks feedbacks={psychologist?.data.attributes.feedbacks} />
            <Popular />
          </div>
        </div>
      )}
    </div>
  );
}
