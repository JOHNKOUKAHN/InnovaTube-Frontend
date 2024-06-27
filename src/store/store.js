import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './authSlice';
import { videoSlice } from './videoSlice';



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    video: videoSlice.reducer,
  }
});


