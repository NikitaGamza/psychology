import React, { useEffect, useState } from 'react';
import style from '../style/Components.module.scss';
import copyStyle from './Copy.module.scss';
import Image from 'next/image';

export default function Copy({ setFiles }: any) {
  const [images, setImages] = useState<Array<any>>([]);
  const handleMultipleImages = (evnt: any) => {
    const selectedFIles = [...images];
    const targetFiles = evnt.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setImages(targetFiles);
  };
  function handleDelete(id: number) {
    const newList: Array<any> = [];
    images.map((item: any, idx: number) => {
      if (idx !== id) {
        newList.push(item);
      }
    });
    setImages(newList);
  }
  useEffect(() => setFiles(images));
  useEffect(() => {
    console.log(images);
  }, [images]);
  return (
    <div className={style.row}>
      <p className={style.row__head}>Копии дипломов и сертификатов</p>
      <div
        className={
          images.length === 0 ? style.row__uploader : style.row__uploader_active
        }
      >
        <input
          type="file"
          id="uploader"
          onChange={handleMultipleImages}
          multiple
          className={style.row__uploader__real}
        />
        {images.length === 0 && (
          <label htmlFor="uploader" className={style.row__uploader__fake}>
            <Image src={'/plus-green.svg'} alt="add" width={24} height={24} />
            <span className={style.row__uploader__text}>
              Прикрепить документ
            </span>
          </label>
        )}

        <div
          className={
            images.length !== 0
              ? style.row__uploader__gallery
              : style.row__uploader__gallery_none
          }
        >
          {images.map((url: any, idx: number) => (
            <div key={idx} className={copyStyle.figure}>
              <Image
                src={url}
                alt="img"
                width={56}
                height={56}
                className={`${copyStyle.Sirv} ${copyStyle.figure__img_main}`}
                onClick={() => handleDelete(idx)}
              />
              <Image
                src={'/img/icons/rest/cross.svg'}
                alt="img"
                width={22}
                height={22}
                className={`${copyStyle.Sirv} ${copyStyle.figure__img_hov}`}
                onClick={() => handleDelete(idx)}
              />
            </div>
          ))}

          <label
            htmlFor="uploader"
            className={style.row__uploader__gallery__more}
          >
            <Image
              src={'/img/icons/rest/plus-green.svg'}
              width={32}
              height={32}
              alt="plus"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
