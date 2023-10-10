import style from './TariffPageComponent.module.scss';
import Tariff from '@/app/components/ui/Tariff/Tariff';

export default function TariffPageComponent() {
  const tariffList = [
    {
      personal: '1 на 1',
      type: 'Очно',
      quantity: 1,
      price: 2500,
    },
    {
      personal: '1 на 1',
      type: 'Очно',
      quantity: 4,
      price: 2500,
      sale: 5,
      priceOne: 2350,
    },
    {
      personal: '1 на 1',
      type: 'Очно',
      quantity: 8,
      price: 2500,
      sale: 7,
      priceOne: 2350,
    },
    {
      personal: '1 на 1',
      type: 'Очно',
      quantity: 12,
      price: 2500,
      sale: 12,
      priceOne: 2350,
    },
  ];
  return (
    <section className={style.tariff}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Тарифы</h2>
          </div>
          <div className={style.tariff__container}>
            <div className={style.tariff__container__options}>
              <div className={style.tariff__container__options__list}>
                <button className="button_sheer_active">Один на один</button>
                <button className="button_sheer">Семейный</button>
                <button className="button_sheer">С ребёнком</button>
              </div>
              <div className={style.tariff__container__options__list}>
                <button className="button_sheer">Очно</button>
                <button className="button_sheer">Онлайн</button>
                <button className="button_sheer_active">Переписка</button>
              </div>
            </div>
          </div>
          <div className={style.tariff__list}>
            {tariffList.map((item: any, index) => (
              <Tariff
                key={index}
                personal={item.personal}
                type={item.type}
                price={item.price}
                priceOne={item.priceOne}
                quantity={item.quantity}
                sale={item.sale}
              />
            ))}
          </div>
          <div className={style.tariff__container__btn}>
            <button className="button_green">Все тарифы</button>
          </div>
        </div>
      </div>
    </section>
  );
}
