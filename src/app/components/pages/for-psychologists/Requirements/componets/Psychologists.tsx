import React from 'react';
import style from './Psycho.module.scss';
import Image from 'next/image';

export default function Psychologists() {
  return (
    <div className={style.psycho}>
      <Image
        src={'/img/pages/for-psychologists/Requirements/psychologists.png'}
        width={500}
        height={500}
        alt="psycho"
        className={style.psycho__img}
      />
      <div className={style.psycho__list}>
        <div className={style.psycho__list__item}>
          <span className={style.psycho__list__item__wrap}>
            <span className={style.psycho__list__item__wrap__num}>1</span>
          </span>
          <span className={style.psycho__list__item__text}>
            Диплом о Высшем психологическом образовании
          </span>
        </div>
        <div className={style.psycho__list__item}>
          <span className={style.psycho__list__item__wrap}>
            <span className={style.psycho__list__item__wrap__num}>2</span>
          </span>
          <span className={style.psycho__list__item__text}>
            Дипломы о повышении квалификации по психотерапии, психокоррекции,
            консультированию или по профессиональной переподготовке по различным
            направлениям психотерапии
          </span>
        </div>
      </div>
    </div>
  );
}
