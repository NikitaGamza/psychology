import style from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
// import '@globals.css';
export default function Header() {
  const navigation = [
    {
      title: 'Главная',
      linkTo: '/',
    },
    {
      title: 'О нас',
      linkTo: '/about',
    },
    {
      title: 'Психологи',
      linkTo: '/team',
    },
    {
      title: 'Тарифы',
      linkTo: '/about',
    },
    {
      title: 'Курсы',
      linkTo: '/about',
    },
    {
      title: 'Организациям',
      linkTo: '/about',
    },
    {
      title: 'Психологам',
      linkTo: '/about',
    },
    {
      title: 'Блог',
      linkTo: '/about',
    },
    {
      title: 'FAQ',
      linkTo: '/about',
    },
  ];
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <div className={style.header__logo__main}>
            <h6 className={style.header__logo__main__head}>Твой</h6>
          </div>

          <div className={style.header__logo__description}>
            <h6 className={style.header__logo__title}>психолог</h6>
            <p className={style.header__logo__subtitle}>помощь очно и онлайн</p>
          </div>
        </div>
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
        <Link href="" className={style.header__button}>
          Подобрать психолога
        </Link>
        <button className={style.header__burger}>
          <Image src="/burger.svg" alt="burger" width="24" height="24" />
        </button>
      </div>
    </div>
  );
}
