import style from './ArticleCart.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCart({ item }: any) {
  return (
    <Link
      href={
        item.attributes.videoLink
          ? `/blog/video/${item.id}`
          : `/blog/advice/${item.id}`
      }
      className={style.cart}
    >
      {item.attributes?.adviceImg?.data.attributes?.url && (
        <Image
          // src={`http://${process.env.NEXT_PUBLIC_SERVER}:1337${item.attributes?.adviceImg.data.attributes?.url}`}
          src={`http://77.232.128.234:1337${item.attributes?.adviceImg.data.attributes?.url}`}
          alt="cover"
          width={100}
          height={100}
          className={style.cart__img}
        />
      )}
      {item.attributes.videoLink && (
        <iframe
          src={item.attributes.videoLink}
          className={style.cart__img}
          onClick={(e) => e.preventDefault()}
        ></iframe>
      )}
      <div className={style.cart__topics}>
        {item.attributes?.themes.data?.map((topic: any, idx: number) => (
          <span key={idx} className={style.cart__topics__item}>
            {topic.attributes.themeName}
          </span>
        ))}
      </div>
      {item.attributes?.title && (
        <h5 className={style.cart__head}>{item.attributes?.title}</h5>
      )}
      {item.attributes?.videoName && (
        <h5 className={style.cart__head}>{item.attributes?.videoName}</h5>
      )}
    </Link>
  );
}
