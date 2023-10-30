import style from './Team.module.scss';
import Selectors from '@/app/components/pages/team/Selectors/Selectors';
import List from '@/app/components/pages/team/List/List';

export default function Team() {
  return (
    <div className={style.about}>
      <div className="container">
        <div className={style.about__main}>
          <div className={style.about__main__content}>
            <h1 className={style.about__main__content__head}>
              Подобрать психолога
            </h1>
            <Selectors />
            <List />
          </div>

          <div className={style.about__main__parameters}>
            <h5>параметры</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
