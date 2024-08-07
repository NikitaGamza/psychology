import style from './Cart.module.scss';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
export default function Cart(item: any) {
  const monthList = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const { attributes } = item.item;
  const startDay = new Date(attributes.startDate);
  return (
    <div className={style.slide}>
      <Image
        src={`http://77.232.128.234:1337${attributes?.imgMain?.data?.attributes?.url}`}
        alt={'course'}
        width={160}
        height={300}
        className={style.slide__img}
      />
      <div className={style.slide__content__info}>
        <div className={style.slide__content__info__wrap}>
          <div className={style.slide__content__info__topics}>
            {attributes.themes.data.map((item: any, idx: number) => (
              <span
                key={idx}
                className={style.slide__content__info__topics__item}
              >
                {item.attributes.themeName}
              </span>
            ))}
          </div>
          <Image
            src={`http://77.232.128.234:1337${attributes?.imgMobile?.data?.attributes?.url}`}
            alt={'course'}
            width={288}
            height={160}
            className={style.slide__content__info__img}
          />
          <h5 className={style.slide__content__info__head}>
            {attributes.courseName}
          </h5>
          <div className={style.slide__content__info__time}>
            <p className={style.slide__content__info__time__text}>
              {startDay.getDate()} {monthList[startDay.getMonth()]}
            </p>
            <Image
              src={'/img/icons/rest/separator.svg'}
              alt="separator"
              width={4}
              height={4}
              className={style.slide__content__info__time__separator}
            />
            <p className={style.slide__content__info__time__text}>
              {attributes.format.data.attributes.formatName}
            </p>
          </div>
          {attributes.address && (
            <div className={style.slide__content__info__location}>
              <p className={style.slide__content__info__location__text}>
                {attributes.address}
              </p>
            </div>
          )}
        </div>

        <div className={style.slide__content__info__record}>
          <button className={style.slide__content__info__record__btn}>
            Записаться
          </button>
          <h5 className={style.slide__content__info__record__price}>
            {attributes.priceFull} ₽
          </h5>{' '}
        </div>
      </div>
    </div>
  );
}
