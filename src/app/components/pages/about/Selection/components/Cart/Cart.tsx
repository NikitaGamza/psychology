import style from './Cart.module.scss';
import Image from 'next/image';

export default function Cart(props: any) {
  const { head, text } = props.props;
  return (
    <div className={style.cart}>
      <Image
        src={'/img/pages/about/Selection/ok.svg'}
        width={56}
        height={56}
        alt="ok"
        className={style.cart__img}
      />
      <div className={style.cart__info}>
        <h5 className={style.cart__info__head}>{head}</h5>
        <p className={style.cart__info__text}>{text}</p>
      </div>
    </div>
  );
}
