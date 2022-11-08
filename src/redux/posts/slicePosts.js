import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllPosts,
  fetchAddPost,
  fetchDeletePost,
  fetchEditPost,
} from 'redux/posts/postsThunks';
import {
  actionChangeSearchQuery,
  actionMarkCheckbox,
  actionUnmarkCheckbox,
  actionDeletePost,
  actionSelectPostByClick,
  actionMarkAllCheckboxes,
  actionChangeSearchParam,
} from 'redux/posts/postsActions';
const initialState = {
  posts: [],
  isLoading: false,
  lastEditedId: null,
  error: null,
  markedPosts: [],
  selectedPostId: null,
  searchQuery: '',
  searchParam: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [fetchAllPosts.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = [...action.payload];
    },
    [fetchAllPosts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAllPosts.pending](state, action) {
      state.isLoading = true;
    },

    [fetchAddPost.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = [action.payload, ...state.posts];
    },
    [fetchAddPost.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAddPost.pending](state, action) {
      state.isLoading = true;
    },

    [fetchDeletePost.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = state.posts.filter(
        user => user.id !== action.payload.id
      );
    },
    [fetchDeletePost.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchDeletePost.pending](state, action) {
      state.isLoading = true;
    },

    [fetchEditPost.fulfilled](state, action) {
      state.isLoading = false;
      state.lastEditedId = action.payload.id;
    },
    [fetchEditPost.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchEditPost.pending](state, action) {
      state.isLoading = true;
    },
    
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

export const postsReducer = postsSlice.reducer;
