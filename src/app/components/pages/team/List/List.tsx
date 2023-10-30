import style from './List.module.scss';
import Psychologist from '@/app/components/ui/Psychologist/Psychologist';
import { psychoList } from './psychoList';

interface Filter {
  workType: string;
}

interface IPsychologist {
  imageUrl: string;
  firstName: string;
  lastName: string;
  workType: Array<string>;
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

export default function List({ workType }: Filter) {
  const result = psychoList.filter((item: any) =>
    item.workType.includes(workType)
  );
  return (
    <div className={style.list}>
      {result.map((item, idx) => (
        <Psychologist
          key={idx}
          imageUrl={item.imageUrl}
          firstName={item.firstName}
          lastName={item.lastName}
          workType={item.workType}
          fields={item.fields}
          feedbacks={item.feedbacks}
          experience={item.experience}
          age={item.age}
          sex={item.sex}
          isMarried={item.isMarried}
          locations={item.locations}
          tags={item.tags}
          inDetail={true}
        />
      ))}
    </div>
  );
}
