import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import registerReducer from "../features/registration/RegisterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});
