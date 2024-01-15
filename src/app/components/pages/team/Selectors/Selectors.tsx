import style from './Selectors.module.scss';
import React, { useEffect, useState, FC } from 'react';

interface ChildProps {
  format: string;
  setFormat: React.Dispatch<React.SetStateAction<string>>;
}

export default function Selectors({ format, setFormat }: ChildProps) {
  return (
    <div className={style.selectors}>
      <button
        onClick={() => setFormat('Очно')}
        className={
          format === 'Очно' ? style.selectors__btn_active : style.selectors__btn
        }
      >
        Очно
      </button>
      <button
        onClick={() => setFormat('Онлайн')}
        className={
          format === 'Онлайн'
            ? style.selectors__btn_active
            : style.selectors__btn
        }
      >
        Онлайн
      </button>
      <button
        onClick={() => setFormat('Переписка')}
        className={
          format === 'Переписка'
            ? style.selectors__btn_active
            : style.selectors__btn
        }
      >
        Переписка
      </button>
    </div>
  );
}
