import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './slices/sliceFilter';
import { userReducer } from './slices/authSlice';
import { postsReducer } from './posts/slicePosts';
import { deviceReduser } from './slices/deviceSlice';
import { ordersReducer } from './orders/ordersSlice';
// import { postsBlockReducer } from './slices/slicePostsBlock';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  // postsBlock: postsBlockReducer,
  posts: postsReducer,
  orders: ordersReducer,
  filter: filterReducer,
  auth: persistedUserReducer,
  device: deviceReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
