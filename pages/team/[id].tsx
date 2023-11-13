import { useEffect, useState } from 'react';
import style from './Team.module.scss';
import { useRouter } from 'next/router';
import { psychoList } from './psychologist';
import Cover from '@/app/components/pages/team/dynamic/Cover/Cover';

export default function Page() {
  const router = useRouter();
  const [psychologist, setPsychologist] = useState(
    psychoList.find((item: any) => item.id == router.query.id)
  );
  useEffect(() => {
    setPsychologist(psychoList.find((item: any) => item.id == router.query.id));
  }, [router.query.id]);
  return (
    <div className={style.dynamic}>
      <div className={style.dynamic__container}>
        <Cover props={psychologist} />
      </div>
    </div>
  );
}
