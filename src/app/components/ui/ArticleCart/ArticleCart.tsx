import style from './ArticleCart.module.scss';
import Image from 'next/image';

export default function ArticleCart({item}: any) {
  return (
    <div className={style.cart}>
      {item.attributes?.adviceImg?.data.attributes?.url && (
        <Image
          src={`http://localhost:1337${item.attributes?.adviceImg.data.attributes?.url}`}
          alt='cover'
          width={100}
          height={100}
          className={style.cart__img}
        />
      )}
      {item.attributes.videoLink && (
        <iframe src={item.attributes.videoLink} className={style.cart__img}></iframe>
      )}
      <div className={style.cart__topics}>
        {item.attributes?.themes.data?.map((topic: any, idx: number) => (
          <span key={idx} className={style.cart__topics__item}>
            {topic.attributes.themeName}
          </span>
        ))}
      </div>
      {
        item.attributes?.title && (
<h5 className={style.cart__head}>{item.attributes?.title}</h5>
        )
      }
      {
        item.attributes?.videoName && (
          <h5 className={style.cart__head}>{item.attributes?.videoName}</h5>
        )
      }
    </div>
  );
}
