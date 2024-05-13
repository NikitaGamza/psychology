import React from 'react';
import style from './MobileLinks.module.scss';
import Image from 'next/image';
import { navigation } from '../../linksList';
import Link from 'next/link';

export default function MobileLinks({ setMobileMenu, mobileMenu }: any) {
  return (
    <div className={style.mob}>
      <div className={style.mob__head}>
        <Image src={'/logo-menu.svg'} alt="" width={98} height={40} />
        <Image
          src={'/img/icons/rest/cross.svg'}
          alt=""
          width={24}
          height={24}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>
      <div className={style.mob__content}>
        {navigation.map((item: any, idx: number) => (
          <Link
            href={item.linkTo}
            key={idx}
            className={style.mob__content__link}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {item.title}
          </Link>
        ))}
        <Link href={'/team'} className={style.mob__content__find}>
          Подобрать психолога
        </Link>
        <div className={style.mob__content__socials}>
          <Link href={'#'}>
            <Image
              src={'/img/icons/contacts/wa-menu.svg'}
              alt=""
              width={32}
              height={32}
            />
          </Link>
          <Link href={'#'}>
            <Image
              src={'/img/icons/contacts/tg-menu.svg'}
              alt=""
              width={32}
              height={32}
            />
          </Link>
          <Link href={'#'}>
            <Image
              src={'/img/icons/contacts/vk-menu.svg'}
              alt=""
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
