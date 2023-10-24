import style from './ArticleCart.module.scss';
import Image from 'next/image';
// import koala from '../../../../../public/video/koala.mp4'

export default function ArticleCart(item: any) {
  const { imgUrl, videoUrl, topics, head } = item.item;
  return (
    <div className={style.cart}>
      {imgUrl && (
        <Image
          src={imgUrl}
          alt="alt"
          width={100}
          height={100}
          className={style.cart__img}
        />
      )}
      {videoUrl && (
        <video
          src={videoUrl}
          width="320"
          height="240"
          className={style.cart__img}
          controls
        >
          video
        </video>
      )}
      <div className={style.cart__topics}>
        {topics.map((topic: string) => (
          <span className={style.cart__topics__item}>{topic}</span>
        ))}
      </div>
      <h5 className={style.cart__head}>{head}</h5>
    </div>
  );
}
