import React, { useEffect, useState } from 'react';
import style from '../style/Components.module.scss';
import Image from 'next/image';

export default function AddEducation() {
  const [edu, setEdu] = useState<Array<any>>([
    {
      id: 0,
      name: '',
    },
  ]);
  return (
    <div className={style.row}>
      <div className={style.row__head_edu}>
        <p className={style.row__head}>дополнительное образование</p>
        {/* <button
          onClick={() => {
            // const prev = edu;
            setEdu([...edu, { id: edu.length, name: '' }]);
          }}
          className={style.row__head_edu__add}
        >
          +
        </button> */}
        <Image
          src={'/plus-green.svg'}
          alt="add"
          width={24}
          height={24}
          onClick={() => {
            // const prev = edu;
            setEdu([...edu, { id: edu.length, name: '' }]);
          }}
        />
      </div>

      {edu.map((item: any, idx: number) => (
        <input
          key={idx}
          type="text"
          name=""
          id={`${idx}`}
          className={style.row__inp}
          placeholder="Введите название учебного заведения, направление подготовки и год"
        />
      ))}
    </div>
  );
}
