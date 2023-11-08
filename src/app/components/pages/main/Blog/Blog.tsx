import style from './Blog.module.scss';
import Link from 'next/link';
import Question from './Question/Question';
import ArticleCart from '@/app/components/ui/ArticleCart/ArticleCart';

export default function Blog() {
  const questionList = [
    {
      head: 'Как правильно налаживать свою жизнь?',
      topics: ['Отношения', 'Семья'],
      text: 'Мне уже 28 лет, но я до их пор ничего не сделал толкового в жизни. В жизни вceгдa ecть выбop. Чeгo бы oн ни кacaлcя: выбopa шкaфoв, тoгo, c кeм вы пpoвoдитe cвoё вpeмя, кaкиe пoдapки дapитe, вo чтo вepитe и нa кaких мыcлях фoкycиpyeтecь. Хaoc — этo выбop. Гнeв — этo выбop. Для мужчины главное понимать, что ты его любишь и что ты ему верна. Чeгo бы oн ни кacaлcя...',
    },
    {
      head: 'Как правильно налаживать свою жизнь?',
      topics: ['Отношения', 'Семья'],
      text: 'Мне уже 28 лет, но я до их пор ничего не сделал толкового в жизни. В жизни вceгдa ecть выбop. Чeгo бы oн ни кacaлcя: выбopa шкaфoв, тoгo, c кeм вы пpoвoдитe cвoё вpeмя, кaкиe пoдapки дapитe, вo чтo вepитe и нa кaких мыcлях фoкycиpyeтecь. Хaoc — этo выбop. Гнeв — этo выбop. Для мужчины главное понимать, что ты его любишь и что ты ему верна. Чeгo бы oн ни кacaлcя...',
    },
  ];
  const suggestList = [
    {
      imgUrl: '/img/pages/main/Suggest/img2.png',
      topics: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      imgUrl: '/img/pages/main/Suggest/img2.png',
      topics: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      imgUrl: '/img/pages/main/Suggest/img2.png',
      topics: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
  ];
  const videoList = [
    {
      videoUrl: '/video/koala.mp4',
      topics: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      videoUrl: '/video/koala.mp4',
      topics: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
    {
      videoUrl: '/video/koala.mp4',
      topics: ['Отношения', 'Семья'],
      head: 'На что обращать внимание при знакомстве?',
    },
  ];
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
                  href={'#'}
                  className={style.blog__content__part__head__link}
                >
                  Все вопросы
                </Link>
              </div>
              <div className={style.blog__content__part__questions}>
                {questionList.map((item: any, idx) => (
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
                  href={'#'}
                  className={style.blog__content__part__head__link}
                >
                  Все советы
                </Link>
              </div>
              <div className={style.blog__content__part__main}>
                {suggestList.map((item: any, idx) => (
                  <ArticleCart key={idx} item={item} />
                ))}
              </div>
            </div>
            <div className={style.blog__content__part}>
              <div className={style.blog__content__part__head}>
                <h4 className={style.blog__content__part__head__title}>
                  Поллезные видео
                </h4>
                <Link
                  href={'#'}
                  className={style.blog__content__part__head__link}
                >
                  Все видео
                </Link>
              </div>
              <div className={style.blog__content__part__main}>
                {videoList.map((item: any, idx) => (
                  <ArticleCart key={idx} item={item} />
                ))}
              </div>
            </div>
          </div>
          <button className={`button_green ${style.blog__all}`}>
            Перейти в блог
          </button>
        </div>
      </div>
    </section>
  );
}
