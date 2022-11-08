import { createSlice } from '@reduxjs/toolkit';
import { setDeviceAction } from 'redux/posts/postsActions';

const initialState = {
  isMobile: false,
  isTablet:false,
  isDesktop:false
};
const deviceSlice = createSlice({
  name: 'device',
  initialState,
  extraReducers: {
    [setDeviceAction](state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const deviceReduser = deviceSlice.reducer;
