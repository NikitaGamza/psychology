import style from './ArticleCart.module.scss';
import Image from 'next/image';

export default function ArticleCart(item: any) {
  const { imgUrl, topics, head } = item.item;
  return (
    <div className={style.cart}>
      <Image
        src={imgUrl}
        alt="alt"
        width={100}
        height={100}
        className={style.cart__img}
      />

      <div className={style.cart__topics}>
        {topics.map((topic: string) => (
          <span className={style.cart__topics__item}>{topic}</span>
        ))}
      </div>
      <h5 className={style.cart__head}>{head}</h5>
    </div>
  );
}
