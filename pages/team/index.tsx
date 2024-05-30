import style from './Team.module.scss';
import Selectors from '@/app/components/pages/team/Selectors/Selectors';
import List from '@/app/components/pages/team/List/List';
import Parameters from '@/app/components/pages/team/Parameters/Parameters';
import { useEffect, useState } from 'react';
import Banner from '@/app/components/pages/team/Banner/Banner';
import Image from 'next/image';
import MobileFilter from '@/app/components/pages/team/MobileFilter/MobileFilter';

export default function Team() {
  const [format, setFormat] = useState<string>('Очно');
  const [mobileFilt, setMobileFilt] = useState<boolean>(false);
  const [specThemes, setSpecThemes] = useState<Array<any>>([]);
  const [methods, setMethods] = useState<Array<any>>([]);
  const [expert, setExpert] = useState<number>(0);

  return (
    <div className={style.team}>
      {mobileFilt && (
        <MobileFilter setMobileFilt={setMobileFilt} mobileFilt={mobileFilt} />
      )}
      <div className="container">
        <div className={style.team__main}>
          <div className={style.team__main__content}>
            <h1 className={style.team__main__content__head}>
              Подобрать психолога
            </h1>
            <div className={style.team__main__content__head_mob}>
              <h2 className={style.team__main__content__head_mob__title}>
                Психологи
              </h2>
              <Image
                src={'/img/icons/rest/filt.svg'}
                alt=""
                width={24}
                height={24}
                onClick={() => setMobileFilt(!mobileFilt)}
              />
            </div>
            <Selectors format={format} setFormat={setFormat} />
            <List
              format={format}
              specThemes={specThemes}
              methods={methods}
              expert={expert}
            />
          </div>
          <Parameters
            specThemes={specThemes}
            setSpecThemes={setSpecThemes}
            methods={methods}
            setMethods={setMethods}
            setExpert={setExpert}
          />
        </div>
        <Banner />
      </div>
    </div>
  );
}
