import { configureStore } from '@reduxjs/toolkit';
import registerReducer from "../features/registration/RegisterSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});
