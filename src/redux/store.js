import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    text: userReducer,
    title: userReducer,
    id: userReducer
  },
});
