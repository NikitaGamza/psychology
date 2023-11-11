import style from './Request.module.scss';
import Name from '@/app/components/pages/request-psychologist/Name/Name';
import WhoNeed from '@/app/components/pages/request-psychologist/WhoNeed/WhoNeed';
import Complaints from '@/app/components/pages/request-psychologist/Complaints/Complaints';
import Format from '@/app/components/pages/request-psychologist/Format/Format';
import City from '@/app/components/pages/request-psychologist/City/City';
import Sex from '@/app/components/pages/request-psychologist/Sex/Sex';
import Experience from '@/app/components/pages/request-psychologist/Experience/Experience';
import Time from '@/app/components/pages/request-psychologist/Time/Time';
import Phone from '@/app/components/pages/request-psychologist/Phone/Phone';
export default function RequestPsychologist() {
  return (
    <div className={style.req}>
      <div className={style.req__container}>
        <h1 className={style.req__container__head}>
          Заявка на подбор психолога
        </h1>
        <Name />
        <Complaints />
        <WhoNeed />
        <Format />
        <City />
        <Sex />
        <Experience />
        <Time />
        <Phone />
        <button className={style.req__container__submit}>
          Оставить заявку
        </button>
      </div>
    </div>
  );
}
