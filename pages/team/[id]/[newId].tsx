import React from 'react';
import { useRouter } from 'next/router';
import style from './test.module.scss';

export default function NewPage() {
  const router = useRouter();
  return (
    <div className={style.test}>
      <h1>bhnjh</h1>
    </div>
  );
}
