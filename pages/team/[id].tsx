import React, { useEffect } from 'react';
import style from './Team.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  const test = 6;
  return (
    <div className={style.about}>
      <h1>parameter is: {router.query.id}</h1>
      <Link href={`/team/${router.query.id}/${test}`}>Link</Link>
    </div>
  );
}
