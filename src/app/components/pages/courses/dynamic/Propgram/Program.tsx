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

export default function Program(props: any) {
  const { duralation, program } = props;
  return (
    <div className={style.prog}>
      <h2 className={style.prog__head}>Програма курса</h2>
      <h6 className={style.prog__duralation}>{duralation} месяца</h6>
      <div className={style.prog__content}>
        {program.map((item: any) => (
          <Part
            key={item.id}
            index={item.id}
            programTitle={item.programTitle}
            programDescription={item.programDescription}
          />
        ))}
      </div>
    </div>
  );
}
