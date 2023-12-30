import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const methodsSlice = createSlice({
  name: 'methodsSlice',
  initialState,
  reducers: {
    toggle: (state, action) => {
      const objIdx = state.methods.findIndex(
        (item) => item.id == action.payload
      );
      state.methods[objIdx].isSelected = !state.methods[objIdx].isSelected;
    },
  },
});

export const { toggle } = methodsSlice.actions;

export default methodsSlice.reducer;
