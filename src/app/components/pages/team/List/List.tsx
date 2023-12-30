import style from './List.module.scss';
import Psychologist from '@/app/components/ui/Psychologist/Psychologist';
import { psychoList } from './psychoList';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function List({ format, parameters }: any) {
  const filterState = useSelector((state) => state);
  const { specThemes, sex, methods, experience, cities } = filterState;
  const [result, setResult] = useState(psychoList);

  useEffect(() => {
    // console.log(filterState);
    const foundSex = sex.sex.find((item: any) => item.isSelected === true);
    const foundExp = experience.experience.find(
      (item: any) => item.isSelected === true
    );
    const foundCity = cities.cities.find(
      (item: any) => item.isSelected === true
    );
    const foundThemes = specThemes.specThemes.filter(
      (item: any) => item.isSelected === true
    );
    const ftar = [];
    foundThemes.map((item: any) => ftar.push(item.name));
    const fmar = [];
    const foundMethods = methods.methods.filter(
      (item: any) => item.isSelected === true
    );
    foundMethods.map((item: any) => fmar.push(item.name));
    if (
      foundSex.value !== null &&
      foundExp.value !== null &&
      foundCity.name !== null &&
      ftar.length !== 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.experience > foundExp.value &&
            item.city === foundCity.name &&
            item.sex === foundSex.value &&
            item.tags.some((ai) => ftar.includes(ai))
        )
      );
    } else if (
      foundSex.value !== null &&
      foundExp.value !== null &&
      foundCity.name !== null &&
      ftar.length == 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.experience > foundExp.value &&
            item.city === foundCity.name &&
            item.sex === foundSex.value
        )
      );
    } else if (
      foundSex.value !== null &&
      foundExp.value !== null &&
      foundCity.name === null &&
      ftar.length !== 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.experience > foundExp.value &&
            item.sex === foundSex.value &&
            item.tags.some((ai) => ftar.includes(ai))
        )
      );
    } else if (
      foundSex.value !== null &&
      foundExp.value === null &&
      foundCity.name !== null &&
      ftar.length !== 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.sex === foundSex.value &&
            item.tags.some((ai) => ftar.includes(ai))
        )
      );
    } else if (
      foundSex.value === null &&
      foundExp.value !== null &&
      foundCity.name !== null &&
      ftar.length !== 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.city === foundCity.name &&
            item.sex === foundSex.value &&
            item.tags.some((ai) => ftar.includes(ai))
        )
      );
    } else if (
      foundSex.value !== null &&
      foundExp.value !== null &&
      foundCity.name === null &&
      ftar.length === 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.experience > foundExp.value &&
            item.sex === foundSex.value
        )
      );
    } else if (
      foundSex.value !== null &&
      foundExp.value === null &&
      foundCity.name !== null &&
      ftar.length === 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.city === foundCity.name &&
            item.sex === foundSex.value
        )
      );
    } else if (
      foundSex.value === null &&
      foundExp.value !== null &&
      foundCity.name !== null &&
      ftar.length === 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.experience > foundExp.value &&
            item.city === foundCity.name
        )
      );
    } else if (
      foundSex.value !== null &&
      foundExp.value === null &&
      foundCity.name === null &&
      ftar.length === 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) && item.sex === foundSex.value
        )
      );
    } else if (
      foundSex.value === null &&
      foundExp.value !== null &&
      foundCity.name === null &&
      ftar.length === 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) && item.experience === foundExp.value
        )
      );
    } else if (
      foundSex.value === null &&
      foundExp.value === null &&
      foundCity.name !== null &&
      ftar.length === 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) && item.city === foundCity.name
        )
      );
    } else if (
      foundSex.value === null &&
      foundExp.value === null &&
      foundCity.name === null &&
      ftar.length !== 0
    ) {
      setResult(
        psychoList.filter(
          (item: any) =>
            item.format.includes(format) &&
            item.tags.some((ai) => ftar.includes(ai))
        )
      );
    } else if (
      foundSex.value === null &&
      foundExp.value === null &&
      foundCity.name === null &&
      ftar.length === 0
    ) {
      setResult(psychoList.filter((item: any) => item.format.includes(format)));
    }
    console.log(foundCity);
  }, [format, specThemes, sex, methods, experience, cities]);

  return (
    <div className={style.list}>
      {result.map((item: any, idx: number) => (
        <Psychologist
          key={idx}
          id={item.id}
          imageUrl={item.imageUrl}
          firstName={item.firstName}
          lastName={item.lastName}
          format={item.format}
          fields={item.fields}
          feedbacks={item.feedbacks}
          experience={item.experience}
          age={item.age}
          sex={item.sex}
          isMarried={item.isMarried}
          city={item.city}
          tags={item.tags}
          inDetail={true}
        />
      ))}
    </div>
  );
}
