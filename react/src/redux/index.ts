import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  text: 'World'
};

export const slice = createSlice({
  name: 'name',
  initialState,
  reducers: {
      change(state, action: PayloadAction<string>) {
          state.text = action.payload;
      },
      reset(state) {
          state.text = initialState.text;
      }
  },
});

export const store = configureStore({
  reducer: slice.reducer
});