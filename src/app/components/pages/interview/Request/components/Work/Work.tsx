import React, { useState } from 'react';
import style from '../style/Components.module.scss';
import Image from 'next/image';

export default function Work() {
  const [work, setWork] = useState<Array<any>>([
    {
      id: 0,
      position: '',
      yearStart: null,
      yearEnd: null,
    },
  ]);
  return (
    <div className={style.row}>
      <div className={style.row__head_edu}>
        <p className={style.row__head}>Места работы</p>
        <button
          className={style.row__head_edu__add}
          onClick={() =>
            setWork([
              ...work,
              { id: work.length, position: '', yearStart: null, yearEnd: null },
            ])
          }
        >
          +
        </button>
      </div>
      {work.map((item: any, idx: number) => (
        <div className={style.row__work} key={idx}>
          <div className={style.row__work__main}>
            <input
              type="text"
              name=""
              className={style.row__work__main__inp}
              placeholder=""
            />
            <Image
              src={'/img/icons/cross.svg'}
              alt="del"
              width={24}
              height={24}
              className={style.row__work__main__del}
              onClick={() => alert('del')}
            />
          </div>

          <div className={style.row__work__fields}>
            <input
              type="text"
              name=""
              className={style.row__work__fields__position}
              placeholder="Должность"
            />
            <input
              type="text"
              name=""
              className={style.row__work__fields__year}
              placeholder="Год начала"
            />
            <input
              type="text"
              name=""
              className={style.row__work__fields__year}
              placeholder="Год окончания"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
