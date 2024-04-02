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
        `http://77.232.128.234:1337/api/psychologists/${router.query.id}?populate=*`
      );
      const repo = await res.json();
      setPsychologist(repo.data);
    }
    hiData();
  }, [router]);

  return (
    <div className={style.dynamic}>
      {psychologist && (
        <div className={style.dynamic__container}>
          <Cover props={psychologist} />
          <h4 className={style.dynamic__container__head}>О психологе</h4>
          <div className={style.dynamic__container__about}>
            <Education props={psychologist?.attributes.education} />
            <Experience props={psychologist?.attributes.experience} />
            <Specialization props={psychologist?.attributes.themes.data} />
            <Methods props={psychologist?.attributes.methods.data} />
            <About
              aboutQuote={psychologist?.attributes.aboutQuote}
              aboutText={psychologist?.attributes.aboutText}
            />
            <Diploma props={psychologist?.attributes.diploma.data} />
            <Feedbacks feedbacks={psychologist?.attributes.feedbacks} />
            <Popular />
          </div>
        </div>
      )}
    </div>
  );
}
