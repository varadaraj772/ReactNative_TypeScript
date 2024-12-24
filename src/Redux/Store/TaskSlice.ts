import {createSlice} from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskSlice = createSlice({
  name: 'Tasks',
  initialState: {},
  reducers: {},
});

export default TaskSlice;
