import React, { useEffect, useState } from 'react';
import style from './Tariff.module.scss';
import Tariff from '@/app/components/ui/Tariff/Tariff';
import Modal from './components/Modal/Modal';

export default function TariffItem(tariffFilter: any) {
  const { therapyName, format } = tariffFilter.tariffFilter;
  const [tariffFormat, setTariffFormat] = useState(format[0]);
  const [modal, setModal] = useState<boolean>(false);
  const [tariffReq, setTariffReq] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/tariffs?populate=*`
      );
      const repo = await res.json();
      setTariffReq(repo.data);
      console.log(repo.data);
      console.log(tariffReq);
    }
    hiData();
  }, []);
  return (
    <div className={style.tariff}>
      {modal && (
        <Modal
          setModal={setModal}
          tariffFormat={tariffFormat}
          setTariffFormat={setTariffFormat}
          therapyName={therapyName}
        />
      )}
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
        {tariffReq &&
          tariffReq?.map(
            (item: any, idx: number) =>
              item.attributes.format.data.attributes.formatName ===
                tariffFormat &&
              item.attributes.format_community.data.attributes.name ===
                therapyName && (
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
      <button
        className={style.tariff__info__req_mobile}
        onClick={() => setModal(true)}
      >
        Оставить заявку
      </button>
    </div>
  );
}
