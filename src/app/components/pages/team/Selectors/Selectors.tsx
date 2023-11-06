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
        className={format === 'Очно' ? 'button_sheer_active' : 'button_sheer'}
      >
        Очно
      </button>
      <button
        onClick={() => setFormat('Онлайн')}
        className={format === 'Онлайн' ? 'button_sheer_active' : 'button_sheer'}
      >
        Онлайн
      </button>
      <button
        onClick={() => setFormat('Переписка')}
        className={
          format === 'Переписка' ? 'button_sheer_active' : 'button_sheer'
        }
      >
        Переписка
      </button>
    </div>
  );
}
