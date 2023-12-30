import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const sexSlice = createSlice({
  name: 'sexSlice',
  initialState,
  reducers: {
    toggle: (state, action) => {
      const objIdx = state.sex.findIndex((item) => item.id == action.payload);
      state.sex.map((item: any) => (item.isSelected = false));
      state.sex[objIdx].isSelected = true;
    },
  },
});
export const { toggle } = sexSlice.actions;

export default sexSlice.reducer;
