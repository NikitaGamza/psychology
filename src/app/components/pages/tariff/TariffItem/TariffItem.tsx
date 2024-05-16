import React, { useEffect, useState } from 'react';
import style from './Tariff.module.scss';
import Tariff from '@/app/components/ui/Tariff/Tariff';
import { tariffList } from './tariffList';
import Modal from './components/Modal/Modal';

export default function TariffItem(tariffFilter: any) {
  const { therapyName, format } = tariffFilter.tariffFilter;
  const [tariffFormat, setTariffFormat] = useState(format[0]);
  const [modal, setModal] = useState<boolean>(false);
  const [tariffReq, setTariffReq] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/tariffs`);
      const repo = await res.json();
      setTariffReq(repo.data);
    }
    hiData();
  }, []);
  useEffect(() => {
    console.log(tariffFilter);
  });
  return (
    <div className={style.tariff}>
      {modal && <Modal setModal={setModal} />}
      <div className={style.tariff__info}>
        <h3 className={style.tariff__info__head}>{therapyName}</h3>
        <div className={style.tariff__info__btns}>
          {format.map((item: string, idx: number) => (
            <button
              key={idx}
              className={
                item === tariffFormat
                  ? style.tariff__info__btns__item_active
                  : style.tariff__info__btns__item
              }
              onClick={() => setTariffFormat(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <ul className={style.tariff__info__bullet}>
          <li className={style.tariff__info__bullet__item}>
            Видео- или аудиоконсультаций на 50 минут
          </li>
          <li className={style.tariff__info__bullet__item}>
            Общение в Zoom или Skype
          </li>
        </ul>
        <button
          className={style.tariff__info__req}
          onClick={() => setModal(true)}
        >
          Оставить заявку
        </button>
      </div>
      <div className={style.tariff__carts}>
        {tariffReq?.map(
          (item: any, idx: number) =>
            item.attributes.format === tariffFormat &&
            item.attributes.community === therapyName && (
              <Tariff
                key={idx}
                personal={item.attributes.community}
                type={item.attributes.format}
                price={item.attributes.priceFull}
                priceOne={item.attributes.pricePerSession}
                quantity={item.attributes.session}
                sale={item.attributes.sale}
              />
            )
        )}
        {/* {tariffList.map(
          (item: any, idx: number) =>
            item.format === tariffFormat &&
            item.tariffPlan === therapyName && (
              <Tariff
                key={idx}
                personal={item.personal}
                type={item.format}
                price={item.price}
                priceOne={item.priceOne}
                quantity={item.quantity}
                sale={item.sale}
              />
            )
        )} */}
      </div>
      <button
        className={style.tariff__info__req_mobile}
        onClick={() => setModal(true)}
      >
        Оставить заявку
      </button>
    </div>
  );
}
