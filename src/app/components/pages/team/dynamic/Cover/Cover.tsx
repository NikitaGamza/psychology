import { useEffect } from 'react';
import style from './Cover.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Cover(props: any) {
  const {
    imageUrl,
    firstName,
    lastName,
    fields,
    feedbacks,
    experience,
    age,
    sex,
    isMarried,
    city,
    address,
    metro,
    links,
  } = props.props;
  return (
    <div className={style.cover}>
      <div className={style.cover__wrap}>
        <Image
          src={imageUrl}
          alt={imageUrl}
          width={220}
          height={220}
          className={style.cover__wrap__img}
        />
        <div className={style.cover__wrap__contact}>
          {links.youtube && (
            <Link href={links.youtube}>
              <Image
                src={'/img/pages/team/yt.svg'}
                alt="youtube"
                width={32}
                height={32}
              />
            </Link>
          )}
          {links.vk && (
            <Link href={links.vk}>
              <Image
                src={'/img/pages/team/vk.svg'}
                alt="youtube"
                width={32}
                height={32}
              />
            </Link>
          )}
        </div>
      </div>
      <div className={style.cover__info}>
        <div className={style.cover__info__wrap}>
          <h4 className={style.cover__info__fio}>
            {firstName} {lastName}
          </h4>
          <div>
            <div className={style.cover__info__fields}>
              {fields.map((item: string) => (
                <span className={style.cover__info__fields__item}>{item} </span>
              ))}
              <span className={style.cover__info__fields__item}>
                {feedbacks.length} отзыва
              </span>
            </div>
            <div className={style.cover__info__params}>
              <span className={style.cover__info__params__item}>
                Стаж {experience} лет •{' '}
              </span>
              <span className={style.cover__info__params__item}>
                {' '}
                {age} лет
              </span>
            </div>
          </div>
          <div>
            <p className={style.cover__info__city}>{city}</p>
            <p className={style.cover__info__location}>
              {address}
              {metro}
            </p>
          </div>
        </div>

        <div className={style.cover__info__btns}>
          <Link href={'#'} className={style.cover__info__btns__rec}>
            Записаться
          </Link>
          <Link href={'#'} className={style.cover__info__btns__tg}>
            <span className={style.cover__info__btns__tg__icon}></span>
            Задать вопрос
          </Link>
          <Link href={'#'} className={style.cover__info__btns__love}>
            <Image
              src={'/heart.svg'}
              alt="heart"
              width={20}
              height={20}
              className={style.cover__info__btns__love__heart}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
