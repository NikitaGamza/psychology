import style from './Cart.module.scss';
import { useEffect } from 'react';

export default function Cart(props: any) {
  const { number, head, text } = props.props;
  return (
    <div className={style.cart} key={number}>
      <h4 className={style.cart__number}>{number}</h4>
      <div className={style.cart__info}>
        <h5 className={style.cart__info__head}>{head}</h5>
        <p className={style.cart__info__text}>{text}</p>
      </div>
    </div>
  );
}
