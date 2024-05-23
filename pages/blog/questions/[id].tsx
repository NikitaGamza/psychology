import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import BlogLayout from '../layout';
import style from './Answer.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';

export default function Answer() {
  const router = useRouter();
  const [detail, setDetail] = useState<any>(null);
  const [moreList, setMoreList] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [readNums, setReadNums] = useState<number>(0);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/questions/${router.query.id}?populate=*`
      );
      const repo = await res.json();
      setDetail(repo);
    }
    hiData();
  }, [router.query.id]);
  useEffect(() => {
    if (
      detail !== null &&
      detail.data &&
      detail.data.attributes &&
      detail.data.attributes.readable
    ) {
      console.log(detail.data.attributes.readable + 1);
      setReadNums(detail.data.attributes.readable + 1);
      if (readNums !== 0) {
        async function submitForm(readable: any) {
          const yourQuest = {
            data: { readable: readable },
          };
          const sendData = await fetch(
            `http://77.232.128.234:1337/api/questions/${router.query.id}`,
            {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(yourQuest),
            }
          );
          const sendResponse = await sendData.json();
          console.log(sendResponse);
        }
        submitForm(readNums);
      }
    }
  }, [detail]);
  return (
    <BlogLayout>
      <div className={style.ans}>
        <Link href={'/blog/questions'} className={style.ans__back}>
          <Image
            src={'/img/icons/arrows/arrow-left-green.svg'}
            alt="back"
            width={10}
            height={7}
            className={style.ans__back__img}
          />
          <span className={style.ans__back__text}>Назад</span>
        </Link>
        {(detail?.data?.id === 0 || detail?.data?.id) && (
          <>
            <div className={style.ans__themes}>
              {detail.data.attributes.themes.data.map(
                (item: any, idx: number) => (
                  <span key={idx} className={style.ans__themes__item}>
                    {item.attributes.themeName}
                  </span>
                )
              )}
            </div>

            <h2 className={style.ans__head}>{detail.data.attributes.Title}</h2>
            <div className={style.ans__client}>
              <Image
                src={`http://77.232.128.234:1337/${detail?.data.attributes.clientImg.data.attributes.url.slice(
                  1
                )}`}
                alt="client"
                width={64}
                height={64}
                className={style.ans__client__img}
              />
              <div className={style.ans__client__shortcut}>
                <p className={style.ans__client__shortcut__name}>
                  {detail.data.attributes.clientName}
                </p>
                <p className={style.ans__client__shortcut__status}>
                  {detail?.data.attributes.clientStatus}
                </p>
              </div>
            </div>
            <div className={style.ans__question}>
              <p className={style.ans__question__text}>
                <Markdown>{detail?.data.attributes.questionText}</Markdown>
              </p>
            </div>
            <div className={style.ans__answer}>
              <Image
                src={`http://77.232.128.234:1337/${detail?.data.attributes.answerImg.data.attributes.url.slice(
                  1
                )}`}
                alt="ans"
                width={64}
                height={64}
                className={style.ans__answer__img}
              />
              <div className={style.ans__answer__info}>
                <div className={style.ans__answer__info__fio}>
                  <span className={style.ans__answer__info__fio__name}>
                    {detail?.data.attributes.answerFIO}
                  </span>
                </div>
                <p className={style.ans__answer__info__status}>
                  {detail?.data.attributes.answerStatus}
                </p>
                <p className={style.ans__answer__info__text}>
                  <Markdown>
                    {open
                      ? detail?.data.attributes.answerText
                      : detail?.data.attributes.answerText.slice(0, 255)}
                  </Markdown>
                </p>
                {!open && (
                  <button
                    onClick={() => setOpen(true)}
                    className={style.ans__answer__info__text__open}
                  >
                    Развернуть
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </BlogLayout>
  );
}
