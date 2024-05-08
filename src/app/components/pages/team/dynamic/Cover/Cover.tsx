import { useEffect } from 'react';
import style from './Cover.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Cover(props: any) {
  const {
    img,
    firstName,
    lastName,
    fields,
    feedbacks,
    startWork,
    dateBirth,
    sex,
    isMarried,
    city,
    address,
    metro,
    socialLicks,
    formats,
  } = props.props.attributes;
  const marriedResult =
    (sex && isMarried && 'Женат') ||
    (sex && !isMarried && 'Не женат') ||
    (!sex && isMarried && 'Замужем') ||
    'Не замужем';
  function experience() {
    const income: any = new Date(startWork);
    const current: any = new Date();
    const count = current - income;
    const res = new Date(count);
    return res.getFullYear() - 1970;
  }
  function age() {
    const birth: any = new Date(dateBirth);
    const current: any = new Date();
    const count = current - birth;
    const res = new Date(count);
    return res.getFullYear() - 1970;
  }
  return (
    <div className={style.cover}>
      <div className={style.cover__wrap}>
        <Image
          src={`http://77.232.128.234:1337/${img.data.attributes.url?.slice(
            1
          )}`}
          alt={img.data.attributes.url}
          width={220}
          height={220}
          className={style.cover__wrap__img}
        />
        <div className={style.cover__wrap__contact}>
          {socialLicks?.map((item: any, id: number) => (
            <Link href={item.link} key={id}>
              <Image
                src={
                  item.type === 'youtube'
                    ? '/img/pages/team/yt.svg'
                    : item.type === 'vk'
                    ? '/img/pages/team/vk.svg'
                    : '/img/pages/team/tg.svg'
                }
                alt={item.type}
                width={32}
                height={32}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className={style.cover__info}>
        <div className={style.cover__info__wrap}>
          <h4 className={style.cover__info__fio}>
            {firstName} {lastName}
          </h4>
          <div>
            <div className={style.cover__info__fields}>
              {fields.data.map((item: any) => (
                <span key={item.id} className={style.cover__info__fields__item}>
                  {item.attributes.name}{' '}
                </span>
              ))}
              <span className={style.cover__info__fields__item}>
                {feedbacks.length} отзыва
              </span>
            </div>
            <div className={style.cover__info__params}>
              <span className={style.cover__info__params__item}>
                Стаж {experience()} лет •
              </span>
              <span className={style.space}> </span>
              <span className={style.cover__info__params__item}>
                {age()} лет •{' '}
              </span>
              <span className={style.space}> </span>
              <span className={style.cover__info__params__item}>
                {marriedResult}
              </span>
            </div>
          </div>
          <div className={style.cover__info__work}>
            {formats.data.map((item: any, idx: number) => (
              <span key={idx} className={style.cover__info__work__format}>
                {item.attributes.formatName}
              </span>
            ))}
          </div>
          <div>
            <p className={style.cover__info__city}>
              {city.data.attributes.name}{' '}
            </p>
            <div className={style.cover__info__location}>
              <p className={style.cover__info__location__address}>{address} </p>
              {metro && (
                <>
                  <Image
                    src={'/img/icons/bullet/bullet-blue.svg'}
                    alt="metro"
                    width={8}
                    height={8}
                    className={style.cover__info__location__bullet}
                  />
                  <p className={style.cover__info__location__metro}>{metro}</p>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <div className={style.cover__wrap__contact_mobile}>
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
        </div> */}
        <div className={style.cover__info__btns}>
          <Link href={'#'} className={style.cover__info__btns__rec}>
            Записаться
          </Link>
          <Link href={'#'} className={style.cover__info__btns__tg}>
            <span className={style.cover__info__btns__tg__icon}></span>
            <span className={style.cover__info__btns__tg__text}>
              Задать вопрос
            </span>
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
