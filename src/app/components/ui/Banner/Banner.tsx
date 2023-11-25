import style from './Banner.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default function Banner(props: any) {
  const { head, text, text2, imgUrl, bgColor } = props;
  return (
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

      {/* <div
        className={
          bgColor === 'blue_req' ? style.banner__img_req : style.banner__img
        }
      > */}
      <Image
        src={imgUrl}
        alt={imgUrl}
        width={334}
        height={393}
        className={
          bgColor === 'green'
            ? style.banner__img_green
            : bgColor === 'blue'
            ? style.banner__img_blue
            : ''
        }
      />
      {/* </div> */}
    </div>
  );
}
