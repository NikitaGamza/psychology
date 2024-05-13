import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const themesSlice = createSlice({
  name: 'themesSlice',
  initialState,
  reducers: {
    toggle: (state: any, action) => {
      const objIdx = state.themes.findIndex(
        (item: any) => item.id == action.payload
      );
      state.themes.map((item: any) => (item.isSelected = false));
      state.themes[objIdx].isSelected = true;
    },
    refresh: (state) => {
      state.themes.map((item: any) => (item.isSelected = false));
    },
  },
});
export const { toggle } = themesSlice.actions;
export const { refresh } = themesSlice.actions;

export default themesSlice.reducer;
