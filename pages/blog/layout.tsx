import style from './BlogLayout.module.scss';
import Link from 'next/link';
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkList = [
    {
      head: 'ВОПРОСЫ',
      linkTo: '/blog/questions',
    },
    {
      head: 'СОВЕТЫ',
      linkTo: '/blog/advice',
    },
    {
      head: 'ВИДЕО',
      linkTo: '/blog/video',
    },
  ];
  return (
    <div className={style.lay}>
      <div className={style.lay__header}>
        <div className={style.lay__header__content}>
          <div className={style.lay__header__content__wrap}>
            <nav className={style.lay__header__content__wrap__nav}>
              {linkList.map((item: any, idx: number) => (
                <Link
                  key={idx}
                  href={item.linkTo}
                  className={style.lay__header__content__wrap__nav__link}
                >
                  {item.head}
                </Link>
              ))}
            </nav>
            <input
              type="text"
              name=""
              id=""
              placeholder="Поиск"
              className={style.lay__header__content__wrap__search}
            />
          </div>
        </div>
      </div>

      <div className={style.lay__content}>{children}</div>
    </div>
  );
}
