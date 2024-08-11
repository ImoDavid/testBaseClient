import { configureStore } from '@reduxjs/toolkit';
import tasksReduce from './features/tasksReduce';

const store = configureStore({
  reducer: {
    tasks: tasksReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
