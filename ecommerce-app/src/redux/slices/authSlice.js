import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,  // login error
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === 'user' && password === 'admin') {
        state.isAuthenticated = true;
        state.user = { username };
        state.error = null;
      } else {
        state.error = 'Invalid credentials';
      }
    },
    register: (state, action) => {
      const { username } = action.payload;
      state.isAuthenticated = true;
      state.user = { username };  // Fake "create" and log in
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;