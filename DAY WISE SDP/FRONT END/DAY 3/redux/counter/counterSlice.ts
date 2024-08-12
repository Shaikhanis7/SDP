import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the initial state interface
interface UserState {
  username: string | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Set the initial state
const initialState: UserState = {
  username: null,
  token: null,
  isAuthenticated: false,
}

// Create the slice
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; token: string }>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    // You can add more actions here, like for handling errors or updating user information
  },
})

// Export the actions
export const { login, logout } = loginSlice.actions

// Export the reducer
export default loginSlice.reducer
