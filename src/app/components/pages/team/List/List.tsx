import style from './List.module.scss';
import Psychologist from '@/app/components/ui/Psychologist/Psychologist';
import { psychoList } from './psychoList';

interface Filter {
  format: string;
}

interface IPsychologist {
  imageUrl: string;
  firstName: string;
  lastName: string;
  format: Array<string>;
  fields: Array<string>;
  feedbacks: Array<string>;
  experience: number;
  age: number;
  sex: boolean;
  isMarried: boolean;
  locations: Array<string>;
  tags: Array<string>;
  inDetail: boolean;
}

export default function List({ format, parameters }: any) {
  const result = psychoList.filter(
    (item: any) =>
      item.format.includes(format) &&
      item.city.includes(parameters.city) &&
      item.experience >= parameters.experience
  );
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
