import style from './Team.module.scss';
import Selectors from '@/app/components/pages/team/Selectors/Selectors';
import List from '@/app/components/pages/team/List/List';
import Parameters from '@/app/components/pages/team/Parameters/Parameters';
import { useEffect, useState } from 'react';
import Banner from '@/app/components/ui/Banner/Banner';

export default function Team() {
  const [format, setFormat] = useState<string>('Очно');
  const [parameters, setParameters] = useState<object>({});
  useEffect(() => {
    console.log(parameters);
  }, [parameters]);
  return (
    <div className={style.team}>
      <div className="container">
        <div className={style.team__main}>
          <div className={style.team__main__content}>
            <h1 className={style.team__main__content__head}>
              Подобрать психолога
            </h1>
            <Selectors format={format} setFormat={setFormat} />
            <List format={format} parameters={parameters} />
          </div>
          <Parameters parameters={parameters} setParameters={setParameters} />
        </div>
        <Banner
          head={'Не нашли подходящего психолога?'}
          text={'Оставьте заявку на подбор нашим специалистам'}
          imgUrl={'/img/ui/Banner/request.svg'}
          bgColor={'blue_req'}
        />
      </div>
    </div>
  );
}
