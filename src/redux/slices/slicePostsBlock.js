import { createSlice } from '@reduxjs/toolkit';
import {
  actionChangeSearchQuery,
  actionMarkCheckbox,
  actionUnmarkCheckbox,
  actionDeletePost,
  actionSelectPostByClick,
  actionMarkAllCheckboxes,
  actionChangeSearchParam,
} from 'redux/actions/postsActions';

const initialState = {
  markedPosts: [],
  selectedPostId: null,
  searchQuery: '',
  searchParam: '',
};
export const slisePostsBlock = createSlice({
  name: 'postsBlock',
  initialState,
  extraReducers: {
    [actionChangeSearchQuery](state, { payload }) {
      state.searchQuery = payload;
    },
    [actionChangeSearchParam](state, { payload }) {
      console.log(payload);
      state.searchParam = payload.dataTitle;
    },
    [actionSelectPostByClick](state, { payload }) {
      state.selectedPostId = payload;
    },
    [actionMarkCheckbox](state, action) {},
    [actionMarkAllCheckboxes](state, action) {
      console.log('marked all checkboxes');
    },
    [actionUnmarkCheckbox](state, action) {},
    [actionDeletePost](state, action) {},
  },
});

export const postsBlockReducer = slisePostsBlock.reducer;
