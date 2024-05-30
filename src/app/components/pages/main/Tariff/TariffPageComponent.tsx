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
  const [tariffReq, setTariffReq] = useState<Array<any>>([]);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/tariffs?populate=*&pagination[pageSize]=28`
      );
      const repo = await res.json();
      setTariffReq(repo.data);
      // console.log(repo.data);
      // console.log(tariffReq);
    }
    hiData();
  }, []);
  return (
    <section className={style.tariff}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className={'section__head__title'}>Тарифы</h2>
          </div>
          <div className={style.tariff__container}>
            <div className={style.tariff__container__options}>
              <div className={style.tariff__container__options__list}>
                {tariffFilter.map((item: any, idx: number) => (
                  <button
                    key={idx}
                    className={
                      item.therapyName === tariffPlan.therapyName
                        ? style.tariff__container__options__list__item_active
                        : style.tariff__container__options__list__item
                    }
                    onClick={() => {
                      setTariffPlan(item);
                      console.log(item);
                    }}
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
                      format === item
                        ? style.tariff__container__options__list__item_active
                        : style.tariff__container__options__list__item
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
            {tariffReq &&
              tariffReq?.map(
                (item: any, idx: number) =>
                  item.attributes.format.data.attributes.formatName ===
                    format &&
                  item.attributes.format_community.data.attributes.name ===
                    tariffPlan.therapyName && (
                    <Tariff
                      key={idx}
                      personal={
                        item.attributes.format_community.data.attributes.name
                      }
                      type={item.attributes.format.data.attributes.formatName}
                      price={item.attributes.priceFull}
                      priceOne={item.attributes.pricePerSession}
                      quantity={item.attributes.session}
                      sale={item.attributes.sale}
                    />
                  )
              )}
          </div>

          <Link href={'/tariff'} className={style.tariff__btn}>
            Все тарифы
          </Link>
        </div>
      </div>
    </section>
  );
}
