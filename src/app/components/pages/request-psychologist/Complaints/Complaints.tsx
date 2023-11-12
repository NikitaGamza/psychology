import style from '../style/style.module.scss';
import { useState } from 'react';

export default function Complaints() {
  const [modal, setModal] = useState<boolean>(false);
  const [complainsList, setComplainsList] = useState<Array<string>>([]);
  const complains = [
    'Стресс',
    'Дети',
    'Семья',
    'Страхи',
    'Самоопределение',
    'Прокрастинация',
    'Грусть, тоска',
    'Депрессия',
    'Апатия',
    'Тревога',
    'Панические атаки',
    'Травмы',
    'Личностный рост',
    'Неуверенность в себе',
    'Работа и карьера',
    'Зависимости',
    'Раздражительность и гнев',
    'Психосоматика',
  ];
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Что вас беспокоит?</p>
      <input
        type="text"
        name=""
        id=""
        placeholder=""
        className={style.wrap__input}
        onFocus={() => setModal(true)}
        onBlur={() => setModal(false)}
      />
      {modal === true && (
        <div className={style.modal}>
          <p className={style.modal__text} onClick={() => setModal(false)}>
            Опишите проблему или выберите подходящие категории
          </p>
        </div>
      )}
      <div className={style.wrap__complains}>
        {complains.map((item: string, idx) => (
          <button key={idx} className={style.wrap__complains__item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
