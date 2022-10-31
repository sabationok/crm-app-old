import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllPosts,
  fetchAddPost,
  fetchDeletePost,
  fetchEditPost,
} from 'redux/thunks/postsThunks';
const initialState = {
  posts: [],
  isloading: false,
  lastEditedId: null,
  error: null,
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
  },
});

export const postsReducer = postsSlice.reducer;
