// let themesdata;
export const initialState = {
  themes: <any>[],
};
async function hiData() {
  const res = await fetch(
    `http://77.232.128.234:1337/api/psychologists?populate=*`
  );
  const repo = await res.json();
  // console.log([...repo.data]);
  // initialState.themes = ['1', '2'];
  // initialState.themes.map((obj: any) => ({ ...obj, isSelected: false }));
}

hiData();
