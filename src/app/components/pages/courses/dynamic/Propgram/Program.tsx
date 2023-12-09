import React from 'react';
import style from './Program.module.scss';
import Part from './components/Part/Part';

interface IPart {
  head: string;
  description: string;
}
interface IProgram {
  duralation: number;
  programList: Array<IPart>;
}

export default function Program(props: IProgram) {
  const { duralation, programList } = props;
  return (
    <div className={style.prog}>
      <h2 className={style.prog__head}>Програма курса</h2>
      <h6 className={style.prog__duralation}>{duralation} месяца</h6>
      <div className={style.prog__content}>
        {programList.map((item: IPart, idx: number) => (
          <Part
            key={idx}
            index={idx}
            head={item.head}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
