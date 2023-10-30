import style from './Selectors.module.scss';
import React, { useEffect, useState, FC } from 'react';

interface ChildProps {
  workType: string;
  setWorkType: React.Dispatch<React.SetStateAction<string>>;
}

export default function Selectors({ workType, setWorkType }: ChildProps) {
  return (
    <div className={style.selectors}>
      <button
        onClick={() => setWorkType('Очно')}
        className={workType === 'Очно' ? 'button_sheer_active' : 'button_sheer'}
      >
        Очно
      </button>
      <button
        onClick={() => setWorkType('Онлайн')}
        className={
          workType === 'Онлайн' ? 'button_sheer_active' : 'button_sheer'
        }
      >
        Онлайн
      </button>
      <button
        onClick={() => setWorkType('Переписка')}
        className={
          workType === 'Переписка' ? 'button_sheer_active' : 'button_sheer'
        }
      >
        Переписка
      </button>
    </div>
  );
}
