import React from 'react';
import style from './Blog.module.scss';
import BlogLayout from './layout';

export default function Blog() {
  return (
    <BlogLayout>
      <div className={style.blog}>
        <div className={style.blog__header}>HEAD</div>
        <h1>blog</h1>
      </div>
    </BlogLayout>
  );
}
