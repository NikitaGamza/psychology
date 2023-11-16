import style from './TariffPageComponent.module.scss';
import Tariff from '@/app/components/ui/Tariff/Tariff';
import { tariffList } from './tariffList';
import { tariffFilter } from './tariffFilter';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TariffPageComponent() {
  const [tariffPlan, setTariffPlan] = useState(tariffFilter[0]);
  const [format, setFormat] = useState(tariffPlan.format[0]);
  useEffect(() => {
    setFormat(tariffPlan.format[0]);
  }, [tariffPlan]);
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
                {tariffFilter.map((item: any, idx: number) => (
                  <button
                    key={idx}
                    className={
                      item.therapyName === tariffPlan.therapyName
                        ? 'button_sheer_active'
                        : 'button_sheer'
                    }
                    onClick={() => setTariffPlan(item)}
                  >
                    {item.therapyName}
                  </button>
                ))}
              </div>
              <div className={style.tariff__container__options__list}>
                {tariffPlan.format.map((item: any, idx: number) => (
                  <button
                    key={idx}
                    className={
                      format === item ? 'button_sheer_active' : 'button_sheer'
                    }
                    onClick={() => setFormat(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={style.tariff__list}>
            {tariffList.map(
              (item: any, index: number) =>
                item.format === format &&
                item.tariffPlan === tariffPlan.therapyName && (
                  <Tariff
                    key={index}
                    personal={item.personal}
                    type={item.format}
                    price={item.price}
                    priceOne={item.priceOne}
                    quantity={item.quantity}
                    sale={item.sale}
                  />
                )
            )}
          </div>
          <div className={style.tariff__container__btn}>
            <Link href={'/tariff'} className="button_green">
              Все тарифы
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
