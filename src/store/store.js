import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import authSlice from "../features/authSlice"; // Example reducer

const store = configureStore({
  reducer: {
    auth:authSlice,
    user: userReducer, // Register your reducers here
  },
});

export default store;
