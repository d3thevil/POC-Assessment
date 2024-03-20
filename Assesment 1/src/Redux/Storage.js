import { configureStore } from '@reduxjs/toolkit';
import StateManage from './StateManage';

export const store = configureStore({
  reducer: {
    todos: StateManage,
  },
});
