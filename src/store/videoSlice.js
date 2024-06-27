import { createSlice, current } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    status: 'loading',
    errorMessage: undefined,
    searchResults: [],
    currentSearchQuery: '',
    favorites: []

  },
  reducers: {
    onNewSearch: (state, { payload }) => {
      state.status = 'ready';
      state.searchResults = payload.searchResults;
      state.currentSearchQuery = payload.currentSearchQuery;
      state.errorMessage = undefined;

    },
    onUpdateFavorites: (state, { payload }) => {
      state.favorites = payload;
      state.errorMessage = undefined;
    },
    onSetErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    }
  }
});

export const { onNewSearch, onUpdateFavorites, onSetErrorMessage, clearErrorMessage } = videoSlice.actions;