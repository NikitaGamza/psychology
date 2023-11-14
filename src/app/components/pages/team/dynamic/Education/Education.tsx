import style from './Education.module.scss';
interface IEdu {
  university: string;
  title: string;
  occupation?: string;
  year: number;
}
export default function Education({ props }: any) {
  return (
    <div className={style.edu}>
      <h5 className={style.edu__head}>Образование</h5>
      <ul className={style.edu__list}>
        {props.map((item: IEdu, idx: number) => (
          <li key={idx} className={style.edu__list__item}>
            {item.university} • {item.title} •{' '}
            {item.occupation && `${item.occupation} • `} {item.year}
          </li>
        ))}
      </ul>
    </div>
  );
}
