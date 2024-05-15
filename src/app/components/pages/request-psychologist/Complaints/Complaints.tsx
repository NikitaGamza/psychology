import style from '../style/style.module.scss';
import { useEffect, useState } from 'react';

export default function Complaints({ setComplains, complains }: any) {
  const [modal, setModal] = useState<boolean>(false);
  const [specThemes, setSpecThemes] = useState<any>(null);
  useEffect(() => {
    async function hiData() {
      const res = await fetch(`http://77.232.128.234:1337/api/themes`);
      const repo = await res.json();
      repo.data?.map((item: any) => (item.isSelected = false));
      setSpecThemes(repo.data);
    }
    hiData();
  }, []);
  useEffect(() => {
    setComplains([]);
    specThemes?.forEach((item: any) => {
      if (item.isSelected) {
        setComplains([...complains, item.attributes.themeName]);
        console.log(complains);
      }
    });
  }, [specThemes]);

  function handleToggle(foundId: number) {
    const currentId = specThemes.findIndex((item: any) => item.id === foundId);
    const updatedItem = Object.assign({}, specThemes[currentId]);
    updatedItem.isSelected = !updatedItem.isSelected;
    const newList = specThemes.slice();
    newList[currentId] = updatedItem;
    setSpecThemes(newList);
  }
  return (
    <div className={style.wrap_inp}>
      <p className={style.wrap__title}>Что вас беспокоит?</p>
      {/* <input
        type="text"
        name=""
        id=""
        placeholder=""
        className={style.wrap__input}
        onFocus={() => setModal(true)}
        onBlur={() => setModal(false)}
      /> */}
      <div
        className={style.wrap__div}
        onFocus={() => setModal(true)}
        onBlur={() => setModal(false)}
      >
        {specThemes?.map(
          (item: any, idx: number) =>
            item.isSelected && (
              <button
                key={idx}
                className={
                  item.isSelected
                    ? style.wrap__complains__item_active
                    : style.wrap__complains__item
                }
                onClick={() => handleToggle(item.id)}
              >
                {item.attributes?.themeName}
              </button>
            )
        )}
      </div>
      {modal === true && (
        <div className={style.modal}>
          <p className={style.modal__text} onClick={() => setModal(false)}>
            Опишите проблему или выберите подходящие категории
          </p>
        </div>
      )}
      <div className={style.wrap__complains}>
        {specThemes?.map((item: any, idx: number) => (
          <button
            key={idx}
            className={
              item.isSelected
                ? style.wrap__complains__item_active
                : style.wrap__complains__item
            }
            onClick={() => handleToggle(item.id)}
          >
            {item.attributes?.themeName}
          </button>
        ))}
      </div>
    </div>
  );
}
