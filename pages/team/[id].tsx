import { useEffect, useState } from 'react';
import style from './Team.module.scss';
import { useRouter } from 'next/router';
import { psychoList } from './psychologist';
import Cover from '@/app/components/pages/team/dynamic/Cover/Cover';
import Education from '@/app/components/pages/team/dynamic/Education/Education';
import Experience from '@/app/components/pages/team/dynamic/Experience/Experience';
import Specialization from '@/app/components/pages/team/dynamic/Specialization/Specialization';
import Methods from '@/app/components/pages/team/dynamic/Methods/Methods';
import About from '@/app/components/pages/team/dynamic/About/About';
import Diploma from '@/app/components/pages/team/dynamic/Diploma/Diploma';
import Popular from '@/app/components/pages/team/dynamic/Popular/Popular';

export default function Page() {
  const router = useRouter();
  const [psychologist, setPsychologist] = useState(
    psychoList.find((item: any) => item.id == router.query.id)
  );
  useEffect(() => {
    console.log(router.query.id);
    console.log(psychologist);
  });
  useEffect(() => {
    setPsychologist(psychoList.find((item: any) => item.id == router.query.id));
  }, [router.query.id]);
  return (
    <div className={style.dynamic}>
      <div className={style.dynamic__container}>
        <Cover props={psychologist} />
        <h4 className={style.dynamic__container__head}>О психологе</h4>
        <div className={style.dynamic__container__about}>
          <Education props={psychologist?.education} />
          <Experience props={psychologist?.workExperience} />
          <Specialization props={psychologist?.tags} />
          <Methods props={psychologist?.methods} />
          <About props={psychologist?.about} />
          <Diploma props={psychologist?.diploma} />
          <Popular />
        </div>
      </div>
    </div>
  );
}
