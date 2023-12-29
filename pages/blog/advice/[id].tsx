import React, { useEffect, useState } from 'react';
import style from './Detail.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import BlogLayout from '../layout';
import { detailList } from './detailList';
import Banner from './components/Banner/Banner';
import Slider from './components/Slider/Slider';
import { moreList } from './moreList';

export default function AdviceDetail() {
  const router = useRouter();
  const [detail, setDetail] = useState<any>();
  useEffect(() => {
    setDetail(detailList.find((item: any) => item.id == router.query.id));
  });
  useEffect(() => {
    console.log(router);
  });
  useEffect(() => {
    setDetail(detailList.find((item: any) => item.id == router.query.id));
  }, [router.query.id]);
  return (
    <BlogLayout>
      <div className={style.det}>
        <Link href={'/blog/advice'} className={style.det__back}>
          <Image
            src={'/img/icons/arrows/arrow-left-green.svg'}
            alt="back"
            width={10}
            height={7}
            className={style.det__back__img}
          />
          <span className={style.det__back__text}>Назад</span>
        </Link>
        <div className={style.det__themes}>
          {detail?.themes.map((item: string, idx: number) => (
            <span key={idx} className={style.det__themes__item}>
              {item}
            </span>
          ))}
        </div>
        <h2 className={style.det__head}>{detail?.head}</h2>
        <Image
          src={detail?.imgUrl}
          alt="img"
          width={100}
          height={100}
          className={style.det__img}
        />
        <div className={style.det__form}>
          <Image
            src={detail?.answerer.imgUrl}
            alt="img"
            width={64}
            height={64}
            className={style.det__form__img}
          />
          <div className={style.det__form__info}>
            <div className={style.det__form__info__fio}>
              <span className={style.det__form__info__fio__name}>
                {detail?.answerer.firstName}
              </span>
              <span className={style.det__form__info__fio__name}>
                {detail?.answerer.lastName}
              </span>
            </div>
            <p className={style.det__form__info__status}>
              {detail?.answerer.status}
            </p>
          </div>
        </div>
        <p className={style.det__preview}>{detail?.preview}</p>
        <div className={style.det__content}>
          {detail?.blocks.map((block: any, idx: number) => (
            <div key={idx} className={style.det__content__block}>
              <h3 className={style.det__content__block__head}>{block.head}</h3>
              <div className={style.det__content__block__text}>
                {block.text.map((speach: string, idxText: number) => (
                  <p
                    key={idxText}
                    className={style.det__content__block__text__speach}
                  >
                    {speach}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Banner />
        <Slider moreList={moreList} />
      </div>
    </BlogLayout>
  );
}
