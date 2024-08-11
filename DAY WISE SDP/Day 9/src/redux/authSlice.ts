import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  username: string;
  password: string;
}

const initialState: AuthState = {
  username: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearAuth: (state) => {
      state.username = '';
      state.password = '';
    },
  },
});

export const { setUsername, setPassword, clearAuth } = authSlice.actions;
export default authSlice.reducer;
