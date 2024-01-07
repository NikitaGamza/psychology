import style from './Blog.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Question from './Question/Question';
import ArticleCart from '@/app/components/ui/ArticleCart/ArticleCart';
import { questionList } from './questionList';
import { suggestList } from './suggestList';
import { videoList } from './videoList';
export default function Blog() {
  return (
    <section className={style.blog}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Блог</h2>
            <p className="section__head__subtitle">
              Мы помогаем вам и развиваемся сами
            </p>
          </div>
          <div className={style.blog__content}>
            <div className={style.blog__content__part}>
              <div className={style.blog__content__part__head}>
                <h4 className={style.blog__content__part__head__title}>
                  Разбираем ваши вопросы
                </h4>
                <Link
                  href={'/blog/questions'}
                  className={style.blog__content__part__head__link}
                >
                  <span className={style.blog__content__part__head__link__text}>
                    Все вопросы
                  </span>
                  <Image
                    width={7}
                    height={7}
                    src={'/img/icons/arrows/arrow-right-green.svg'}
                    alt="arrow"
                    className={style.blog__content__part__head__link__arrow}
                  />
                </Link>
              </div>
              <div className={style.blog__content__part__questions}>
                {questionList.map((item: any, idx: number) => (
                  <Question item={item} key={idx} />
                ))}
              </div>
            </div>
            <div className={style.blog__content__part}>
              <div className={style.blog__content__part__head}>
                <h4 className={style.blog__content__part__head__title}>
                  Советы психологов
                </h4>
                <Link
                  href={'/blog/advice'}
                  className={style.blog__content__part__head__link}
                >
                  <span className={style.blog__content__part__head__link__text}>
                    Все советы
                  </span>
                  <Image
                    width={7}
                    height={7}
                    src={'/img/icons/arrows/arrow-right-green.svg'}
                    alt="arrow"
                    className={style.blog__content__part__head__link__arrow}
                  />
                </Link>
              </div>
              <div className={style.blog__content__part__main}>
                {suggestList.map((item: any, idx: number) => (
                  <ArticleCart key={idx} item={item} />
                ))}
              </div>
            </div>
            <div className={style.blog__content__part}>
              <div className={style.blog__content__part__head}>
                <h4 className={style.blog__content__part__head__title}>
                  Полезные видео
                </h4>
                <Link
                  href={'/blog/video'}
                  className={style.blog__content__part__head__link}
                >
                  <span className={style.blog__content__part__head__link__text}>
                    Все видео
                  </span>
                  <Image
                    width={7}
                    height={7}
                    src={'/img/icons/arrows/arrow-right-green.svg'}
                    alt="arrow"
                    className={style.blog__content__part__head__link__arrow}
                  />
                </Link>
              </div>
              <div className={style.blog__content__part__main}>
                {videoList.map((item: any, idx: number) => (
                  <ArticleCart key={idx} item={item} />
                ))}
              </div>
            </div>
          </div>
          <Link href={'/blog/advice'} className={style.blog__all}>
            Перейти в блог
          </Link>
        </div>
      </div>
    </section>
  );
}
