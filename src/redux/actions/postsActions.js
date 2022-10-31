import { createAction } from '@reduxjs/toolkit';

export const actionChangeSearchQuery = createAction(
  'posts/actionChangeSearchQuery'
);
export const actionMarkCheckbox = createAction('posts/actionMarkCheckbox');
export const actionMarkAllCheckboxes = createAction('posts/actionMarkAllCheckboxes');
export const actionUnmarkCheckbox = createAction('posts/actionUnmarkCheckbox');
export const actionDeletePost = createAction('posts/actionDeletePost');
export const actionSelectPostByClick = createAction(
  'posts/actionSelectPostByClick'
);
export const actionChangeSearchParam = createAction(
  'posts/actionChangeSearchParam'
);