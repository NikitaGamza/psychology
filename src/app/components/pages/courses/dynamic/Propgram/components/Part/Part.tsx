import React, { useEffect, useState } from 'react';
import style from './Part.module.scss';
import Image from 'next/image';

interface IPart {
  index: number;
  head: string;
  description: string;
}

export default function Part(props: IPart) {
  const { index, head, description } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className={style.part}>
      <div className={style.part__head}>
        <h2 className={style.part__head__title}>
          {' '}
          <span className={style.part__head__title_idx}>{index + 1}.</span>{' '}
          {head}
        </h2>
        <Image
          src={
            isVisible
              ? '/img/icons/rest/close-modal.svg'
              : '/img/icons/rest/open-modal.svg'
          }
          alt="switch"
          width={48}
          height={48}
          className={style.part__head__img}
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
      <p
        className={
          isVisible ? style.part__description : style.part__description_none
        }
      >
        {description}
      </p>
    </div>
  );
}
