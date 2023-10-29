import style from './About.module.scss';
import Introduction from '@/app/components/pages/about/Introduction/Introduction';
import Founders from '@/app/components/pages/about/Founders/Founders';
import Values from '@/app/components/pages/about/Values/Values';
import Charity from '@/app/components/pages/about/Charity/Charity';
import Selection from '@/app/components/pages/about/Selection/Selection';
export default function About() {
  return (
    <div className={style.about}>
      <Introduction />
      <Founders />
      <Values />
      <Selection />
      <Charity />
    </div>
  );
}
