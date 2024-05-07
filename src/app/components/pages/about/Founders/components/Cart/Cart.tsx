import style from './Cart.module.scss';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

export default function Cart(props: any) {
  const { imgUrl, fio, job, text } = props;
  return (
    <div className={`${style.item}`}>
      <Image
        src={imgUrl}
        width={360}
        height={360}
        alt="Krytov"
        className={style.item__img}
      />
      <h4 className={style.item__fio}>{fio}</h4>
      <p className={style.item__job}>{job}</p>
      <Image
        src={'/img/pages/about/separate.png'}
        width={328}
        height={20}
        alt="Krytov"
        className={style.item__separate}
      />
      <p className={style.item__text}>{text}</p>
    </div>
  );
}
