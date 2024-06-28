import style from './Blog.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Question from './Question/Question';
import ArticleCart from '@/app/components/ui/ArticleCart/ArticleCart';
import { useState, useEffect } from 'react';
export default function Blog() {
  const [questionList, setQuestionList] = useState<any>();
  const [suggestList, setSuggestList] = useState<any>();
  const [videoList, setVideoList] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/questions?populate=*&pagination[pageSize]=2&sort=id:desc`
      );
      const repo = await res.json();
      setQuestionList(repo.data);
    }
    hiData();
  }, []);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/advices?populate=*&pagination[pageSize]=3&sort=id:desc`
      );
      const repo = await res.json();
      setSuggestList(repo.data);
    }
    hiData();
  }, []);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/videos?populate=*&pagination[pageSize]=3&sort=id:desc`
      );
      const repo = await res.json();
      setVideoList(repo.data);
    }
    hiData();
  }, []);
  return (
    <section className={style.blog}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Вопрос | Ответ</h2>
            <p className="section__head__subtitle">
              На ваши вопросы отвечают опытные психологи и психотерапевты
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
                    Все
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
                {questionList?.map((item: any, idx: number) => (
                  <Question item={item} key={idx} passKey={idx} />
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
                    Все
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
                {suggestList?.map((item: any, idx: number) => (
                  <ArticleCart key={idx} item={item} />
                ))}
              </div>
            </div>
            {/* <div className={style.blog__content__part}>
              <div className={style.blog__content__part__head}>
                <h4 className={style.blog__content__part__head__title}>
                  Полезные видео
                </h4>
                <Link
                  href={'/blog/video'}
                  className={style.blog__content__part__head__link}
                >
                  <span className={style.blog__content__part__head__link__text}>
                    Все
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
                {videoList?.map((item: any, idx: number) => (
                  <ArticleCart key={idx} item={item} />
                ))}
              </div>
            </div> */}
          </div>
          <Link href={'/blog/advice'} className={style.blog__all}>
            Перейти в блог
          </Link>
        </div>
      </div>
    </section>
  );
}
