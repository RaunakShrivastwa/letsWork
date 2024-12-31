import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import authSlice from "../features/authSlice"; // Example reducer
import projectSlice from '../features/ProjectSlice';

const store = configureStore({
  reducer: {
    auth:authSlice,
    user: userReducer, // Register your reducers here
    project:projectSlice
  },
});

export default store;
