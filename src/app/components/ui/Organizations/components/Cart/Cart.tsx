import style from './Cart.module.scss';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
export default function Cart(item: any) {
  const { imgUrl, head } = item.item;
  return (
    <div className={`keen-slider__slide ${style.slide}`}>
      <div className={style.slide__frame}>
        <Image
          src={imgUrl}
          alt="img"
          width={230}
          height={43}
          className={style.slide__frame__img}
        />
      </div>
      <hr className={style.slide__hr} />
      <p>{head}</p>
    </div>
  );
}
