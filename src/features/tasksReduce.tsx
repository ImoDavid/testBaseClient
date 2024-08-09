import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseURL = 'https://testbaseserver-2.onrender.com/';

const api = axios.create({
  baseURL: BaseURL,
});

const initialState = {
  tasks: [
    {
      id: '1',
      name: 'Task 1',
      completed: false,
    },
  ],
  loading: false,
  error: null,
  filterStatus: 'all',
};

export const fetchTasks = createAsyncThunk('taskStore/fetchTasks', async () => {
  const response = await api.get('/api/tasks');
  return response.data;
});

export const addTask = createAsyncThunk(
  'taskStore/addTask',
  async (newTask: { title: string }) => {
    const response = await api.post('/api/tasks', { title: newTask.title });
    return response.data;
  },
);

export const deleteTask = createAsyncThunk(
  'taskStore/deleteTask',
  async (taskId: string) => {
    await api.delete(`/api/tasks/${taskId}`);
    return taskId;
  },
);

export const updateTask = createAsyncThunk(
  'taskStore/updateTask',
  async ({ taskId, updatedData }: { taskId: string; updatedData: any }) => {
    const response = await api.put(`/api/tasks/${taskId}`, updatedData);
    const task = [...response.data];
    return task;
  },
);

const taskSlice = createSlice({
  name: 'taskStore',
  initialState,
  reducers: {
    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
      });
  },
});

export const { setFilterStatus } = taskSlice.actions;

export default taskSlice.reducer;
