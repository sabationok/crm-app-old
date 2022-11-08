import { createAction } from '@reduxjs/toolkit';

export const actionChangeSearchQuery = createAction(
  'posts/actionChangeSearchQuery'
);
export const actionMarkCheckbox = createAction('orders/actionMarkCheckbox');
export const actionMarkAllCheckboxes = createAction('orders/actionMarkAllCheckboxes');
export const actionUnmarkCheckbox = createAction('orders/actionUnmarkCheckbox');
export const actionDeleteOrder = createAction('orders/actionDeleteorder');
export const actionSelectOrderByClick = createAction(
  'orders/actionSelectOrderByClick'
);
export const actionChangeSearchParam = createAction(
  'posts/actionChangeSearchParam'
);