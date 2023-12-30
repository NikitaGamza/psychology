import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const experienceSlice = createSlice({
  name: 'experienceSlice',
  initialState,
  reducers: {
    toggle: (state, action) => {
      const objIdx = state.experience.findIndex(
        (item) => item.id == action.payload
      );
      state.experience.map((item: any) => (item.isSelected = false));
      state.experience[objIdx].isSelected = true;
    },
  },
});
export const { toggle } = experienceSlice.actions;

export default experienceSlice.reducer;
