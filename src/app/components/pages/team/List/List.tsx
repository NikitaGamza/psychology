import style from './List.module.scss';
import Psychologist from '@/app/components/ui/Psychologist/Psychologist';
import { psychoList } from './psychoList';

export default function List() {
  return (
    <div className={style.list}>
      {psychoList.map((item, idx) => (
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
