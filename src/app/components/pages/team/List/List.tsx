import style from './List.module.scss';
import Psychologist from '@/app/components/ui/Psychologist/Psychologist';
import { useEffect, useState } from 'react';

export default function List({ format, specThemes }: any) {
  const [result, setResult] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://77.232.128.234:1337/api/psychologists?populate=*&filters[formats][formatName][$eq]=${format}`
      );
      const repo = await res.json();
      await setResult(repo);
      console.log(result);
    }
    hiData();
  }, []);
  useEffect(() => {
    async function hiData() {
      let createReq: Array<any> = [];
      specThemes.map((item: any, idx: number) => {
        if (item.isSelected) {
          createReq.push(
            `&filters[$or][${idx}][themes][themeName][$eq]=${item.attributes.themeName}`
          );
        }
      });
      const res = await fetch(
        `http://77.232.128.234:1337/api/psychologists?populate=*&filters[formats][formatName][$eq]=${format}${createReq.join(
          ''
        )}`
      );
      const repo = await res.json();
      await setResult(repo);
      console.log(result);
    }
    hiData();
  }, [format, specThemes]);
  return (
    <div className={style.list}>
      {result?.data?.map((item: any) => (
        <Psychologist
          key={item.id}
          id={item.id}
          img={item.attributes.img.data.attributes.url}
          firstName={item.attributes.firstName}
          lastName={item.attributes.lastName}
          formats={item.attributes.formats.data}
          fields={item.attributes.fields.data}
          feedbacks={item.attributes.feedbacks}
          startWork={item.attributes.startWork}
          dateBirth={item.attributes.dateBirth}
          sex={item.attributes.sex}
          isMarried={item.attributes.isMarried}
          city={item.attributes.city.data.attributes.name}
          metro={item.attributes.metro}
          themes={item.attributes.themes.data}
          inDetail={true}
        />
      ))}
      {/* {result.length > 5 && (
        <button className={style.list__more}>Показать ещё</button>
      )} */}
    </div>
  );
}
