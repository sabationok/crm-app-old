import { createSlice } from '@reduxjs/toolkit';
const initialState={
  filter:''
}
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    applyFilterAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { applyFilterAction } = filterSlice.actions;
