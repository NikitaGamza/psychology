import style from './Selectors.module.scss';

export default function Selectors() {
  return (
    <div className={style.selectors}>
      <button className={'button_sheer'}>Очно</button>
      <button className={'button_sheer'}>Онлайн</button>
      <button className={'button_sheer'}>Переписка</button>
    </div>
  );
}
