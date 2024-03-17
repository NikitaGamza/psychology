import style from './List.module.scss';
import Psychologist from '@/app/components/ui/Psychologist/Psychologist';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function List({ format, parameters }: any) {
  const filterState = useSelector((state) => state);
  const { specThemes, sex, methods, experience, cities }: any = filterState;
  const [result, setResult] = useState<any>();
  useEffect(() => {
    async function hiData() {
      const res = await fetch(
        `http://localhost:1337/api/psychologists?populate=*`
      );
      const repo = await res.json();
      await setResult(repo);
      console.log(result);
    }
    hiData();
  }, []);
  return (
    <div className={style.list}>
      {/* 'localhost:1337/url' */}
      {result?.data.map((item: any) => (
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
