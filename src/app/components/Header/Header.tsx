'use client';
import style from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import MobileLinks from './components/MobileLinks/MobileLinks';
import React, { useState } from 'react';
import { navigation } from './linksList';
// import '@globals.css';
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <div className={style.header}>
      {mobileMenu && (
        <MobileLinks setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      )}
      <div className={style.header__container}>
        <Link href={'/'}>
          <Image
            src={'/logo-head.svg'}
            alt="logo"
            width={200}
            height={56}
            className={style.header__logoimg}
          />
          <Image
            src={'/logo-head-mob.svg'}
            alt="logo"
            width={200}
            height={56}
            className={style.header__logoimg_mob}
          />
        </Link>

        <nav className={style.header__nav}>
          {navigation.map((item: any, idx: number) => (
            <Link
              key={idx}
              className={style.header__nav__link}
              href={item.linkTo}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Link href="/team" className={style.header__button}>
          Подобрать психолога
        </Link>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={style.header__burger}
        >
          <Image src="/burger.svg" alt="burger" width="24" height="24" />
        </button>
      </div>
    </div>
  );
}
