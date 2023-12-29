import style from './BlogLayout.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/features/blogThemesSlice';
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
  const router = useRouter();
  const blogThemes = useSelector((state) => state.blogThemes.blogThemes);
  const dispatch = useDispatch();
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
      {(router.pathname == '/blog/video' ||
        router.pathname == '/blog/questions' ||
        router.pathname == '/blog/advice') && (
        <div className={style.lay__info}>
          <h1 className={style.lay__head}>
            {router.pathname == '/blog/video' && 'Видео'}
            {router.pathname == '/blog/questions' && 'Вопросы'}
            {router.pathname == '/blog/advice' && 'Советы'}
          </h1>
          <div className={style.lay__order}>
            <button className={style.lay__order__btn}>Самые читаемые</button>
            <button className={style.lay__order__btn}>
              По дате публикации
            </button>
            <button className={style.lay__order__btn}>По теме</button>
          </div>
          <div className={style.lay__themes}>
            {blogThemes.map((item: any, idx: number) => (
              <button
                key={idx}
                className={
                  item.isSelected
                    ? style.lay__themes__btn_active
                    : style.lay__themes__btn
                }
                onClick={() => dispatch(toggle(item.id))}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={style.lay__content}>{children}</div>
    </div>
  );
}
