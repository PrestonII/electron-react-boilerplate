import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk, RootState } from '../../store';
import data from '../../data/data.project.initial';

const projectSlice = createSlice({
  name: 'project',
  initialState: data,
  reducers: {
    createNewProject: (state) => {
      const now = new Date().toDateString();
      state.dateCreated = now;
      state.dateModified = now;
      console.log(state);
    },
    openProject: (state, action) => {
      console.log(state);
      console.log(action);
    },
  },
});

export const { createNewProject, openProject } = projectSlice.actions;

export default projectSlice.reducer;

export const selectProject = (state: RootState) => state.project;
