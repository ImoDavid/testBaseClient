import { configureStore } from '@reduxjs/toolkit';
import tasksReduce from './features/tasksReduce';

export const store = configureStore({
  reducer: {
    tasks: tasksReduce,
  },
});
