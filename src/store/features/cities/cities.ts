import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const citiesSlice = createSlice({
  name: 'citiesSlice',
  initialState,
  reducers: {
    toggle: (state, action) => {
      const objIdx = state.cities.findIndex(
        (item) => item.id == action.payload
      );
      state.cities.map((item: any) => (item.isSelected = false));
      state.cities[objIdx].isSelected = true;
    },
  },
});
export const { toggle } = citiesSlice.actions;

export default citiesSlice.reducer;
