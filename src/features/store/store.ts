import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from '../top/mainSlice';

const rootReducer = combineReducers({
  main: mainSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof rootReducer>;
