import style from './WeHelpPageComponent.module.scss';
import Image from 'next/image';

export default function WeHelpPageComponent() {
  return (
    <section className={style.help}>
      <div className="container">
        <div className="section">
          <div className="section__head">
            <h2 className="section__head__title">Мы поможем вам</h2>
            <p className="section__head__subtitle">
              Мы помогаем решить многие психологические проблемы
            </p>
          </div>
          <div className={style.help__content}>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/survive.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Пережить психологические травмы и обрести смысл жизни
              </p>
            </div>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/serve.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Решить проблемную ситуацию и справиться со стрессом
              </p>
            </div>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/back.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Вернуть хорошее настроение и уверенность в себе
              </p>
            </div>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/understand.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Разобраться в себе и в своих отношениях с окружающими
              </p>
            </div>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/turn.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Стать более эффективными в межличностном взаимодействии
              </p>
            </div>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/master.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Освоить навыки эмоциональной саморегуляции
              </p>
            </div>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/overcome.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Побороть тревогу, страхи, депрессию
              </p>
            </div>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/activate.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Активизировать внутренние ресурсы
              </p>
            </div>
            <div className={style.help__content__item}>
              <Image
                src={'/WeHelp/b.jpg'}
                alt="img"
                width={330}
                height={330}
                className={style.help__content__item__img}
              />
              <p className={style.help__content__item__text}>
                Повысить продуктивность и добиться карьерного роста
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
