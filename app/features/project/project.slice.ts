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
    openProject: (state) => {
      console.log(state);
    },
  },
});

export const { createNewProject, openProject } = projectSlice.actions;

export default projectSlice.reducer;

export const selectProject = (state: RootState) => state.project;

// function createNewProject(state: RootState) {
//   const now = new Date().toDateString();
//   state.project.dateCreated = now;
//   state.project.dateModified = now;
// }

// const createNewProject = createAction('PROJECT_NEW');
// const openProject = createAction('PROJECT_OPEN');

// const selector = createReducer(data,{
//   [createNewProject.type]: (state) => {
//     const now = new Date().toDateString();
//     state.dateCreated = now;
//     state.dateModified = now;
//   },
//   [openProject.type]: (state) => {
//     console.log(state);
//     // probably need to query and API for this project and get
//     // it's info
//   }
// });
