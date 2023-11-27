import React from 'react';
import style from './style/Benefits.module.scss';
import Image from 'next/image';

export default function Benefits() {
  return (
    <div className={style.ben}>
      <h2 className={style.ben__head}>
        Чем мы можем быть полезными для вашей организации
      </h2>
      <div className={style.ben__list}>
        <div className={style.ben__list__item_right}>
          <div className={style.ben__list__item__info}>
            <h4 className={style.ben__list__item__info__head}>
              Программа поддержки сотрудников{' '}
              <h4 className={style.ben__list__item__info__head}>
                «Поддерживающая среда»
              </h4>
            </h4>
            <h6 className={style.ben__list__item__info__subhead}>
              Поддержим ваших сотрудников:
            </h6>
            <div className={style.ben__list__item__info__bullet}>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  В период стрессовой ситуации на работе
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  В ситуации чрезвычайного характера, требующей специальной
                  психологической помощи
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  В любой трудной жизненной ситуации
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  В решении проблем личного характера
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  В преодолении прокрастинации и недостатка мотивации
                </span>
              </div>
            </div>
          </div>
          <Image
            src={'/img/pages/for-organizations/Benefit/1.png'}
            alt="1"
            width={604}
            height={530}
            className={style.ben__list__item__img}
          />
        </div>
        <div className={style.ben__list__item}>
          <Image
            src={'/img/pages/for-organizations/Benefit/2.png'}
            alt="1"
            width={604}
            height={530}
            className={style.ben__list__item__img}
          />
          <div className={style.ben__list__item__info}>
            <h4 className={style.ben__list__item__info__head}>
              Well-being программа для сотрудников «Здоровье, Осознанность,
              Развитие - мой выбор»
            </h4>
            <h6 className={style.ben__list__item__info__subhead}>
              Поможем вашим сотрудникам:
            </h6>
            <div className={style.ben__list__item__info__bullet}>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Разобраться в себе и освободится от негативных мыслей и
                  установок
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Преодолеть любые стрессовые ситуации
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Увидеть и преодолеть проблемы карьерного роста
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Решить проблемы в общении с коллегами и забыть о конфликтах
                  раз и навсегда
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Справится с трудностями периода профессионального выгорания
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.ben__list__item_right}>
          <div className={style.ben__list__item__info}>
            <h4 className={style.ben__list__item__info__head}>
              Коучинг руководителей и топ-менеджеров
            </h4>
            <h6 className={style.ben__list__item__info__subhead}>
              Научим руководителей и топ-менеджеров:
            </h6>
            <div className={style.ben__list__item__info__bullet}>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Повышению эффективности команды
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Осознанному подходу и карьерному росту без ограничений и
                  напряжения в команде
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Адаптированию новых сотрудников
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Снижению конфликтности в коллективе
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Повышению лояльности и уважения коллектива
                </span>
              </div>
            </div>
          </div>
          <Image
            src={'/img/pages/for-organizations/Benefit/3.png'}
            alt="1"
            width={604}
            height={530}
            className={style.ben__list__item__img}
          />
        </div>
        <div className={style.ben__list__item}>
          <Image
            src={'/img/pages/for-organizations/Benefit/4.png'}
            alt="1"
            width={604}
            height={530}
            className={style.ben__list__item__img}
          />
          <div className={style.ben__list__item__info}>
            <h4 className={style.ben__list__item__info__head}>
              Тренинги и тимбилдинги
            </h4>
            <h6 className={style.ben__list__item__info__subhead}>
              Проведем тренинги и меропрития на различные темы:
            </h6>
            <div className={style.ben__list__item__info__bullet}>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Тренинг «Клиенты на всю жизнь. Клиентоориентированный подход в
                  бизнесе»
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Тренинг «Эффективная коммуникация в команде»
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Тренинг «Эмоциональный интеллект»
                </span>
              </div>
              <div className={style.ben__list__item__info__bullet__el}>
                <Image
                  src={'/img/icons/bullet/bullet-green.svg'}
                  alt="bullet"
                  width={6}
                  height={6}
                  className={style.ben__list__item__info__bullet__el__point}
                />
                <span className={style.ben__list__item__info__bullet__el__text}>
                  Командообразующий квест/игру/мероприятие, сплочающий команду
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
