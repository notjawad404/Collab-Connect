import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  profile: null,
  session: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.session = action.payload.session;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.profile = null;
      state.session = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAuth, setProfile, clearAuth, setLoading } = authSlice.actions;
export default authSlice.reducer;
