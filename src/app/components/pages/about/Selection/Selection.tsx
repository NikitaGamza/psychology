import style from './Selection.module.scss';
import Image from 'next/image';
import Cart from './components/Cart/Cart';

export default function Selection() {
  const selectList = [
    {
      head: 'Образованию',
      text: 'Мы предоставляем проверенные инструменты и пространство для развития и самореализации сотрудникам YouTalk, нашим клиентам психологам.',
    },
    {
      head: 'Опыту работы',
      text: 'От трёх лет. За это время накапливается хороший практический опыт',
    },
    {
      head: 'Собеседованию',
      text: 'Проверяем самое важное: навыки и успешные кейсы из практики',
    },
    {
      head: 'Обучению',
      text: 'И мастерам важно учиться. Развиваем через семинары и супервизии',
    },
  ];
  return (
    <div className={style.selection}>
      <h2 className={style.selection__head}>
        <div className={style.selection__head_green}>
          Мы строго отбираем психологов
        </div>{' '}
        и работаем только с самыми опытными
      </h2>
      <div className={style.selection__content}>
        <div className={style.selection__content__info}>
          <h4 className={style.selection__content__info__title}>
            Мы уделяем внимание
          </h4>
          <div className={style.selection__content__info__list}>
            {selectList.map((item) => (
              <Cart props={item} />
            ))}
          </div>
        </div>
        <div className={style.pics}>
          <div className={style.pics__column_first}>
            <Image
              src={'/img/pages/about/Selection/pics/1.svg'}
              alt="img"
              width={156}
              height={156}
              className={style.pics__img_one}
            />
            <p className={style.pics__tag_green_one}>Арт-терапия</p>
            <Image
              src={'/img/pages/about/Selection/pics/2.svg'}
              alt="img"
              width={129}
              height={129}
              className={style.pics__img_two}
            />
            <p className={style.pics__tag_yellow_one}>Гештальт</p>
            <Image
              src={'/img/pages/about/Selection/pics/3.svg'}
              alt="img"
              width={162}
              height={162}
              className={style.pics__img_three}
            />
          </div>
          <div className={style.pics__column_second}>
            <p className={style.pics__tag_blue_one}>Коучинг</p>
            <Image
              src={'/img/pages/about/Selection/pics/4.svg'}
              alt="img"
              width={167}
              height={167}
              className={style.pics__img_four}
            />
            <Image
              src={'/img/pages/about/Selection/pics/5.svg'}
              alt="img"
              width={193}
              height={193}
              className={style.pics__img_five}
            />
            <p className={style.pics__tag_blue_two}>Семейная терапия</p>
          </div>
          <div className={style.pics__column_third}>
            <Image
              src={'/img/pages/about/Selection/pics/6.svg'}
              alt="img"
              width={120}
              height={120}
              className={style.pics__img_six}
            />
            <p className={style.pics__tag_yellow_two}>Психоанализ</p>
            <Image
              src={'/img/pages/about/Selection/pics/7.svg'}
              alt="img"
              width={173}
              height={173}
              className={style.pics__img_seven}
            />
            <p className={style.pics__tag_green_two}>КПТ</p>
            <Image
              src={'/img/pages/about/Selection/pics/8.svg'}
              alt="img"
              width={133}
              height={133}
              className={style.pics__img_eight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
