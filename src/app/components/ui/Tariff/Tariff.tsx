import style from './Tariff.module.scss';

export default function Tariff(props: any) {
  const { personal, type, quantity, priceOne, price, sale } = props;
  return (
    <div
      className={`${style.tariff__cart}
        ${
          quantity === 1
            ? style.tariff__cart_1
            : quantity === 4
            ? style.tariff__cart_4
            : quantity === 8
            ? style.tariff__cart_8
            : style.tariff__cart_12
        }
      `}
    >
      {sale && (
        <div className={style.tariff__cart__sale}>
          <span className={style.tariff__cart__sale__info}>-{sale}%</span>
        </div>
      )}
      <p className={style.tariff__cart__types}>
        {personal} {type}
      </p>
      <h4
        className={
          sale
            ? style.tariff__cart__quantity_sale
            : style.tariff__cart__quantity
        }
      >
        {quantity}{' '}
        {quantity === 1 ? 'сессия' : quantity === 4 ? 'сессии' : 'сессий'}
      </h4>
      {sale && (
        <p className={style.tariff__cart__types}>{priceOne}₽ за сеанс</p>
      )}

      <h4 className={style.tariff__cart__quantity}>{price} ₽</h4>
    </div>
  );
}
