import style from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__content}>
          <div className={style.footer__content__links}>
            <Link
              href={'/about'}
              className={style.footer__content__links__item}
            >
              О нас
            </Link>
            <Link href={'/team'} className={style.footer__content__links__item}>
              Психологи
            </Link>
            <Link
              href={'/tariff'}
              className={style.footer__content__links__item}
            >
              Тарифы
            </Link>
            <Link
              href={'/about'}
              className={style.footer__content__links__item}
            >
              Курсы
            </Link>
            <Link
              href={'/for-organizations'}
              className={style.footer__content__links__item}
            >
              Организациям
            </Link>
            <Link
              href={'/for-psychologists'}
              className={style.footer__content__links__item}
            >
              Психологам
            </Link>
            <Link
              href={'/about'}
              className={style.footer__content__links__item}
            >
              Блог
            </Link>
            <Link href={'/faq'} className={style.footer__content__links__item}>
              FAQ
            </Link>
          </div>
          <div className={style.footer__content__feedback}>
            <div className={style.footer__content__feedback__form}>
              <h6 className={style.footer__content__feedback__form__head}>
                Подпишитесь, чтобы не пропустить скидки и акции
              </h6>
              <form
                action=""
                className={style.footer__content__feedback__form__display}
              >
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Ваш E-mail"
                  className={
                    style.footer__content__feedback__form__display__inp
                  }
                />
                <button
                  className={
                    style.footer__content__feedback__form__display__send
                  }
                >
                  <Image
                    src={'/img/icons/send.svg'}
                    width={20}
                    height={20}
                    alt="send"
                  />
                </button>
              </form>
              <p className={style.footer__content__feedback__form__privacy}>
                Подписываясь, я соглашаюсь на обработку{' '}
                <Link
                  href={'/personal-data'}
                  className={
                    style.footer__content__feedback__form__privacy__link
                  }
                >
                  персональных данных
                </Link>{' '}
                и с{' '}
                <Link
                  href={'/privacy'}
                  className={
                    style.footer__content__feedback__form__privacy__link
                  }
                >
                  Политикой конфиденциальности
                </Link>
              </p>
            </div>
            <div className={style.footer__content__feedback__contacts}>
              <p className={style.footer__content__feedback__contacts__head}>
                Контакты
              </p>
              <div className={style.footer__content__feedback__contacts__list}>
                <p
                  className={
                    style.footer__content__feedback__contacts__list__phone
                  }
                >
                  ТУТ ЗАПРОС
                </p>
                <p
                  className={
                    style.footer__content__feedback__contacts__list__mail
                  }
                >
                  ТУТ ЗАПРОС
                </p>
              </div>
              <div className={style.footer__content__feedback__contacts__links}>
                <Image
                  src={'/img/icons/socials/green/whataapp.svg'}
                  alt="whatsapp"
                  width={32}
                  height={32}
                  className={
                    style.footer__content__feedback__contacts__links__item
                  }
                />
                <Image
                  src={'/img/icons/socials/green/tg.svg'}
                  alt="tg"
                  width={32}
                  height={32}
                  className={
                    style.footer__content__feedback__contacts__links__item
                  }
                />
                <Image
                  src={'/img/icons/socials/green/vk.svg'}
                  alt="vk"
                  width={32}
                  height={32}
                  className={
                    style.footer__content__feedback__contacts__links__item
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <hr className={style.footer__hr} />
        <div className={style.footer__down}>
          <span className={style.footer__down__quote}>
            © Твой Психолог, 2023
          </span>
          <Link href={'/docs/privacy'} className={style.footer__down__text}>
            Юридические документы
          </Link>
          <span className={style.footer__down__text}>Способы оплаты</span>
        </div>
      </div>
    </footer>
  );
}
