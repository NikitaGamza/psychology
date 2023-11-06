import style from './style/Parameters.module.scss';
import { params } from './params';
import Item from './components/Item/Item';
import { useEffect, useState } from 'react';

interface IRadio {
  id: string | number | undefined;
  name: string;
  value: string | number | boolean | null;
}
interface IParameter {
  head: string | number;
  name: string;
  list: Array<IRadio>;
}
export default function Parameters({ parameters, setParameters }: any) {
  return (
    <div className={style.params}>
      <h5 className={style.params__head}>Параметры</h5>
      <div className={style.params__set}>
        {params.map((item: IParameter, idx: number) => (
          <Item
            item={item}
            parameters={parameters}
            setParameters={setParameters}
          />
        ))}
      </div>
    </div>
  );
}
