import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const formatSlice = createSlice({
  name: 'formatSlice',
  initialState,
  reducers: {
    toggle: (state, action) => {
      const objIdx = state.format.findIndex(
        (item) => item.id == action.payload
      );
      state.format.map((item: any) => (item.isSelected = false));
      state.format[objIdx].isSelected = true;
    },
  },
});
export const { toggle } = formatSlice.actions;

export default formatSlice.reducer;
