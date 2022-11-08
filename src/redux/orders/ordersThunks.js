import { createAsyncThunk } from '@reduxjs/toolkit';
import crmApi from '../../services/crmApi';
// import { token } from '../../services/crmApi';

export const fetchAllOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (_, thunkAPI) => {
    try {
      const response = await crmApi.get(`/orders`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddOrder = createAsyncThunk(
  'orders/fetchAddOrder',
  async (newOrder, thunkAPI) => {
    try {
      const response = await crmApi.post(`/orders`, newOrder);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchDeleteOrder = createAsyncThunk(
  'orders/fetchDeletePost',
  async (orderID, thunkAPI) => {
    try {
      const response = await crmApi.delete(`/orders/${orderID}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchEditOrder = createAsyncThunk(
  'orders/fetchEditPost',
  async (editedOrder, thunkAPI) => {
    console.log(editedOrder);
    try {
      const response = await crmApi.put(
        `/orders/${editedOrder.id}`,
        editedOrder.data
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
