import style from '../style/style.module.scss';
import { useState } from 'react';

export default function Complaints() {
  const [modal, setModal] = useState<boolean>(false);
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
        <p onClick={() => setModal(false)}>
          Опишите проблему или выберите подходящие категории
        </p>
      )}
    </div>
  );
}
