import style from './Cart.module.scss';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
export default function Cart(item: any) {
  const {
    imgUrl,
    imgHorizontUrl,
    startDate,
    duralation,
    day,
    time,
    type,
    address,
    price,
    topics,
    head,
  } = item.item;
  return (
    <div className={`keen-slider__slide ${style.slide}`}>
      <div className={style.slide__content}>
        <Image
          src={imgUrl}
          alt={imgUrl}
          width={160}
          height={300}
          className={style.slide__content__img}
        />
        <div className={style.slide__content__info}>
          <div className={style.slide__content__info__wrap}>
            <div className={style.slide__content__info__topics}>
              {topics.map((item: string) => (
                <span className={style.slide__content__info__topics__item}>
                  {item}
                </span>
              ))}
            </div>
            <Image
              src={imgHorizontUrl}
              alt={imgUrl}
              width={288}
              height={160}
              className={style.slide__content__info__img}
            />
            <h5 className={style.slide__content__info__head}>{head}</h5>
            <div className={style.slide__content__info__time}>
              <p className={style.slide__content__info__time__text}>
                c {startDate}
              </p>
              <Image
                src={'/img/icons/rest/separator.svg'}
                alt="separator"
                width={4}
                height={4}
                className={style.slide__content__info__time__separator}
              />
              <p className={style.slide__content__info__time__text}>
                {duralation} месяца
              </p>
            </div>
            <div className={style.slide__content__info__time}>
              <p className={style.slide__content__info__time__text}>
                {day} в {time}
              </p>
              <Image
                src={'/img/icons/rest/separator.svg'}
                alt="separator"
                width={4}
                height={4}
                className={style.slide__content__info__time__separator}
              />
              <p className={style.slide__content__info__time__text}>{type}</p>
            </div>
            <div className={style.slide__content__info__location}>
              <Image
                src={'/img/icons/rest/location.svg'}
                alt="location"
                width={18}
                height={24}
              />
              <p className={style.slide__content__info__location__text}>
                {address}
              </p>
            </div>
          </div>

          <div className={style.slide__content__info__record}>
            <button
              className={`button_green ${style.slide__content__info__record__btn}`}
            >
              Записаться
            </button>
            <h5 className={style.slide__content__info__record__price}>
              {price} ₽
            </h5>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
