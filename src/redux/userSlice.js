import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  text: '',
  title: '',
  id: 0,
  initialState: {
    name: '',
    text: '',
    title: '',
    id: 0
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, name: payload };
    },
    addText(state, { payload }) {
      return { ...state, text: payload };
    },
    addTitle(state, { payload }) {
      return { ...state, title: payload };
    },
    addPost(state,{payload}){
        return [{...state, id: payload}];
    }
  },
});

export const { changeUser, addText, addTitle, addPost } = slice.actions;

export const selectUser = (state) => state.user;
export const selectTitle = (state) => state.title;
export const selectText = (state) => state.text;

export default slice.reducer;
