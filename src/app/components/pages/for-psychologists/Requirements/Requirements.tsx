import { useState } from 'react';
import style from './Requirements.module.scss';
import Psychologists from './componets/Psychologists';
import Psychotherapist from './componets/Psychotherapist';

export default function Requirements() {
  const [btn, setBtn] = useState<boolean>(true);
  return (
    <div className={style.req}>
      <h2 className={style.req__head}>Наши требования</h2>
      <div className={style.req__switch}>
        <button
          className={
            btn ? style.req__switch__btn_active : style.req__switch__btn
          }
          onClick={() => setBtn(true)}
        >
          Психологам
        </button>
        <button
          className={
            btn ? style.req__switch__btn : style.req__switch__btn_active
          }
          onClick={() => setBtn(false)}
        >
          Психотерапевтам
        </button>
      </div>
      {btn ? <Psychologists /> : <Psychotherapist />}
    </div>
  );
}
