import style from './Banner.module.scss';
import Image from 'next/image';
export default function Banner(props: any) {
  const { head, text, imgUrl, bgColor } = props;
  return (
    <div className={bgColor === 'blue' ? style.banner_blue : style.banner}>
      <div className={style.banner__wrap}>
        <div className={style.banner__info}>
          <h2 className={style.banner__info__head}>{head}</h2>
          <p className={style.banner__info__text}>{text}</p>
        </div>
        <button className={style.banner__btn}>Подобрать психолога</button>
      </div>

      <div>
        <Image src={imgUrl} alt={imgUrl} width="334" height="393" />
      </div>
    </div>
  );
}
