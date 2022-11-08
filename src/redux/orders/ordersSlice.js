import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllOrders,
  fetchAddOrder,
  fetchDeleteOrder,
  fetchEditOrder,
} from 'redux/orders/ordersThunks';
import {
  actionChangeSearchQuery,
  actionMarkCheckbox,
  actionUnmarkCheckbox,
  actionDeleteOrder,
  actionSelectOrderByClick,
  actionMarkAllCheckboxes,
  actionChangeSearchParam,
} from 'redux/orders/ordersActions';
const initialState = {
  orders: [],
  isLoading: false,
  lastEditedId: null,
  error: null,
  markedOrders: [],
  selectedOrderId: null,
  searchQuery: '',
  searchParam: '',
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: {
    [fetchAllOrders.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = [...action.payload];
    },
    [fetchAllOrders.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAllOrders.pending](state, action) {
      state.isLoading = true;
    },

    [fetchAddOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = [action.payload, ...state.orders];
    },
    [fetchAddOrder.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAddOrder.pending](state, action) {
      state.isLoading = true;
    },

    [fetchDeleteOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = state.orders.filter(order => order.id !== action.payload.id);
    },
    [fetchDeleteOrder.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchDeleteOrder.pending](state, action) {
      state.isLoading = true;
    },

    [fetchEditOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.lastEditedId = action.payload.id;
    },
    [fetchEditOrder.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchEditOrder.pending](state, action) {
      state.isLoading = true;
    },

    [actionChangeSearchQuery](state, { payload }) {
      state.searchQuery = payload;
    },
    [actionChangeSearchParam](state, { payload }) {
      state.searchParam = payload.dataTitle;
    },
    [actionSelectOrderByClick](state, { payload }) {
      state.selectedPostId = payload;
    },
    [actionMarkCheckbox](state, action) {},
    [actionMarkAllCheckboxes](state, action) {
      console.log('marked all checkboxes');
    },
    [actionUnmarkCheckbox](state, action) {},
    [actionDeleteOrder](state, action) {},
  },
});

export const ordersReducer = ordersSlice.reducer;
