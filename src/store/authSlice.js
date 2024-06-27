import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    errorMessage: undefined,
    msg: undefined,
    user: {},
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
    },
    onSetMessage: (state, { payload }) => {
      state.msg = payload;
    },
    onSetErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    onClearMessage: (state) => {
      state.msg = undefined;
    },
    onClearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  }
});

export const { onChecking, onLogin, onLogout, onClearErrorMessage, onClearMessage, onSetErrorMessage, onSetMessage } = authSlice.actions;