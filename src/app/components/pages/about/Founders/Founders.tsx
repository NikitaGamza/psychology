import style from './Founders.module.scss';
import Image from 'next/image';
import Cart from './components/Cart/Cart';
import Slider from './components/Slider/Slider';

export default function Founders() {
  return (
    <section className={style.found}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Основатели Твой Психолог</h2>
          </div>
          <div className={style.found__content}>
            <Cart
              imgUrl={'/img/pages/about/Krytov.png'}
              fio={'Дмитрий Крутов'}
              job="Клинический психолог, психотерапевт, основатель Твой Психолог"
              text="Считаю, что в SMM главное — это диалог с клиентом. От того, насколько грамотно вы построите коммуникацию, будет зависеть успех всей кампании. Хороший специалист должен стать бизнес-партнером для клиента. Также и на курсах, чтобы обучение было эффективным, я выстраиваю диалог со студентами"
            />
            <Cart
              imgUrl="/img/pages/about/Popova.png"
              fio="Анастасия Попова"
              job="Клинический психолог, психотерапевт, основатель Твой Психолог"
              text="Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому,
              нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому."
            />
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
