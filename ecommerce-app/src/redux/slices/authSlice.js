import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';


// login
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await API.post('/auth/login/', { username, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

// register
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      await API.post('/auth/register/', { username, email, password });
      // after the user registers, automatically login from this
      const loginResponse = await API.post('/auth/login/', { username, password });
      localStorage.setItem('token', loginResponse.data.token);
      return loginResponse.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Registration failed');
    }
  }
);

// Load user profile if token exists
export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/auth/profile/');
      return response.data;
    } catch (error) {
      localStorage.removeItem('token');
      return rejectWithValue('Session expired');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!localStorage.getItem('token'),
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // states
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = {
          id: action.payload.user_id,
          username: action.payload.username,
          email: action.payload.email,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // register state
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = {
          id: action.payload.user_id,
          username: action.payload.username,
          email: action.payload.email,
        };
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Load user
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;