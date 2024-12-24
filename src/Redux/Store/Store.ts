import {configureStore} from '@reduxjs/toolkit';
import TaskSlice from './TaskSlice';
import ProjectSlice from './ProjectSlice';

export const store = configureStore({
  reducer: {
    tasks: TaskSlice.reducer,
    projects: ProjectSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
