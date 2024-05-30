import style from './List.module.scss';
import Psychologist from '@/app/components/ui/Psychologist/Psychologist';
import { useEffect, useState } from 'react';

export default function List({
  format,
  specThemes,
  methods,
  expert,
  selectedSex,
}: any) {
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
      const data = new Date();
      const year = data.getFullYear() - expert;
      let month = `${data.getMonth()}`;
      if (month.length == 1) {
        month = `0${month}`;
      }
      const day = data.getDate();
      let createReq: Array<any> = [];
      specThemes.map((item: any, idx: number) => {
        let i = 0;
        if (item.isSelected) {
          i = i + 1;
          createReq.push(
            `&filters[$or][${i}][themes][themeName]=${item.attributes.themeName}`
          );
        }
      });
      let createMeth: Array<any> = [];
      methods.map((item: any, idx: number) => {
        let i = 0;
        if (item.isSelected) {
          i = i + 1;
          createMeth.push(
            `&filters[$or][${i}][methods][name]=${item.attributes.name}`
          );
        }
      });
      let createSex = '';
      if (selectedSex === true) {
        createSex = '&filters[sex][$eq]=true';
      } else if (selectedSex === false) {
        createSex = '&filters[sex][$eq]=false';
      } else {
        createSex = '&filters[sex][$null]';
      }
      const res = await fetch(
        `http://77.232.128.234:1337/api/psychologists?populate=*&filters[formats][formatName][$eq]=${format}${createReq.join(
          ''
        )}${createMeth.join(
          ''
        )}&filters[startWork][$lte]=${year}-${month}-${day}${createSex}`
      );
      const repo = await res.json();
      await setResult(repo);
      console.log(result);
    }
    hiData();
  }, [format, specThemes, methods, expert, selectedSex]);
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
