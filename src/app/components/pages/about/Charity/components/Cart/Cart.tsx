import style from './Cart.module.scss';
import Image from 'next/image';

export default function Cart(props: any) {
  const { imgUrl, head, text } = props.props;
  return (
    <div className={`${style.cart}`}>
      <Image
        src={imgUrl}
        width={20}
        height={20}
        alt="img"
        className={style.cart__img}
      />
      <h5 className={style.cart__head}>{head}</h5>
      <p className={style.cart__text}>{text}</p>
    </div>
  );
}
