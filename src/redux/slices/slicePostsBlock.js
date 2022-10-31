import { createSlice } from '@reduxjs/toolkit';
import {
  actionChangeSearchQuery,
  actionMarkCheckbox,
  actionUnmarkCheckbox,
  actionDeletePost,
  actionSelectPostByClick,actionMarkAllCheckboxes,
} from 'redux/actions/postsActions';

const initialState = {
  markedPosts: [],
  selectedPostId: null,
  searchQuery: '',
};
export const slisePostsBlock = createSlice({
  name: 'postsBlock',
  initialState,
  extraReducers: {
    [actionChangeSearchQuery](state, { payload }) {
      state.searchQuery = payload;
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
