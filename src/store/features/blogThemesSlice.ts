import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const specSlice = createSlice({
  name: 'specSlice',
  initialState,
  reducers: {
    toggle: (state, action) => {
      const objIdx = state.specThemes.findIndex(
        (item) => item.id == action.payload
      );
      state.specThemes[objIdx].isSelected =
        !state.specThemes[objIdx].isSelected;
    },
  },
});

export const { toggle } = specSlice.actions;

export default specSlice.reducer;
