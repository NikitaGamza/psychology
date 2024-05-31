import style from './Selection.module.scss';
import Image from 'next/image';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';

export default function Selection() {
  const [imgList, setImgList] = useState<Array<any>>([]);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/psychologists-covers?populate=*&pagination[pageSize]=8`
      );
      const repo = await res.json();
      setImgList(repo.data);
    }
    hiData();
  }, []);
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
            {selectList.map((item: any, idx: number) => (
              <Cart props={item} key={idx} />
            ))}
          </div>
        </div>
        <div className={style.pics}>
          {imgList &&
            imgList.map((item: any, idx: number) => (
              <Image
                src={`http://77.232.128.234:1337${item.attributes.img.data.attributes.url}`}
                alt={`psycholog`}
                width={100}
                height={100}
                key={idx}
                className={
                  idx === 0
                    ? style.pics_0
                    : idx == 1
                    ? style.pics_1
                    : idx == 2
                    ? style.pics_2
                    : idx == 3
                    ? style.pics_3
                    : idx == 4
                    ? style.pics_4
                    : idx == 5
                    ? style.pics_5
                    : idx == 6
                    ? style.pics_6
                    : style.pics_7
                }
              />
            ))}
          {/* <Image
            src={'/img/pages/about/Selection/pics/selection-team.png'}
            alt=""
            width={540}
            height={680}
            className={style.pics__desctop}
          /> */}
          <Image
            src={'/img/pages/about/Selection/pics/selection-mob.png'}
            alt=""
            width={284}
            height={226}
            className={style.pics__mob}
          />
        </div>
      </div>
    </div>
  );
}
