import React, { useEffect, useState } from 'react';
import style from './Cover.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Cover() {
  const [imgList, setImgList] = useState<Array<any>>([]);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/psychologists-covers?populate=*&pagination[pageSize]=7`
      );
      const repo = await res.json();
      setImgList(repo.data);
    }
    hiData();
  }, []);
  return (
    <div className={style.cover}>
      <div className={style.cover__info}>
        <h1 className={style.cover__info__head}>
          Присоединяйтесь к сообществу{' '}
          <span className={style.cover__info__head_green}>профессионалов!</span>
        </h1>
        <p className={style.cover__info__text}>
          Если помощь людям - твоё призвание, мы всегда будем рады видеть тебя в
          команде!
        </p>
        <Link href={'/interview'} className={style.cover__info__req}>
          Оставить заявку
        </Link>
      </div>
      {/* <Image
        src={'/img/pages/for-psychologists/cover.png'}
        alt="cover"
        width={656}
        height={675}
        className={style.cover__img}
      /> */}
      <div className={style.cover__img}>
        {imgList &&
          imgList.map((item: any, idx: number) => (
            <Image
              src={`http://77.232.128.234:1337${item.attributes.img.data.attributes.url}`}
              alt={`http://77.232.128.234:1337${item.attributes.img.data.attributes.url}`}
              width={100}
              height={100}
              key={idx}
              className={
                idx === 0
                  ? style.cover__img_0
                  : idx == 1
                  ? style.cover__img_1
                  : idx == 2
                  ? style.cover__img_2
                  : idx == 3
                  ? style.cover__img_3
                  : idx == 4
                  ? style.cover__img_4
                  : idx == 5
                  ? style.cover__img_5
                  : idx == 6
                  ? style.cover__img_6
                  : style.cover__img_2
              }
            />
          ))}
      </div>
      <Link href={'/interview'} className={style.cover__info__req_mobile}>
        Оставить заявку
      </Link>
    </div>
  );
}
