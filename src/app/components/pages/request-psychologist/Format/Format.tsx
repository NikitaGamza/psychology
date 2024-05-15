import { useState } from 'react';
import style from '../style/style.module.scss';

export default function Format({setFormat}:any) {
  const [checker, setChecker] = useState<string>('online');
  return (
    <div className={style.wrap_radio}>
      <p className={style.wrap__title}>помощь нужна</p>
      <div className={style.wrap__list}>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('online')}
        >
          <label
            htmlFor="online"
            className={
              checker === 'online'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="format"
            id="online"
            value="online"
            className={style.wrap__list__item__radio}
            onClick={()=>setFormat('online')}
          />
          <label htmlFor="online" className={style.wrap__list__label}>
            Онлайн
          </label>
        </div>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('offline')}
        >
          <label
            htmlFor="offline"
            className={
              checker === 'offline'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="format"
            id="offline"
            value="offline"
            className={style.wrap__list__item__radio}
            onClick={()=>setFormat('очно')}
          />
          <label htmlFor="offline" className={style.wrap__list__label}>
            Очно
          </label>
        </div>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('chat')}
        >
          <label
            htmlFor="chat"
            className={
              checker === 'chat'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="format"
            id="chat"
            value="chat"
            className={style.wrap__list__item__radio}
            onClick={()=>setFormat('переписка')}
          />
          <label htmlFor="chat" className={style.wrap__list__label}>
            Переписка
          </label>
        </div>
        <div
          className={style.wrap__list__item}
          onClick={() => setChecker('notMatter')}
        >
          <label
            htmlFor="notMatter"
            className={
              checker === 'notMatter'
                ? style.wrap__list__item__fake_active
                : style.wrap__list__item__fake
            }
          ></label>
          <input
            type="radio"
            name="format"
            id="notMatter"
            value="notMatter"
            className={style.wrap__list__item__radio}
            onClick={()=>setFormat('не важно')}
          />
          <label htmlFor="notMatter" className={style.wrap__list__label}>
            Неважно
          </label>
        </div>
      </div>
    </div>
  );
}
