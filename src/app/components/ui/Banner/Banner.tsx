import style from './Banner.module.scss';
import Link from 'next/link';
export default function Banner(props: any) {
  const { head, text, text2, imgUrl, bgColor } = props;
  return (
    <div className="container">
      <div
        className={
          bgColor === 'blue'
            ? style.banner_blue
            : bgColor === 'green'
            ? style.banner_green
            : style.banner_req
        }
      >
        <div
          className={
            bgColor === 'blue' ? style.banner__wrap_blue : style.banner__wrap
          }
        >
          <div className={style.banner__info}>
            <h2 className={style.banner__info__head}>{head}</h2>
            <p className={style.banner__info__text}>{text}</p>
            <p className={style.banner__info__text}>{text2}</p>
          </div>
          <Link
            href={bgColor === 'blue_req' ? '/request-psychologist' : '/team'}
            className={
              bgColor === 'blue' || bgColor === 'blue_req'
                ? style.banner__info__btn_blue
                : bgColor === 'green'
                ? style.banner__info__btn_green
                : 'etc'
            }
          >
            Подобрать психолога
          </Link>
        </div>
      </div>
    </div>
  );
}
