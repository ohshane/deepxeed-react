import { createSlice, configureStore } from '@reduxjs/toolkit';

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: {
    isDarkmode: false
  },
  reducers: {
    toggle: {
      reducer: (state, action) => { state.isDarkmode = !state.isDarkmode }
    }
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: false
  },
  reducers: {
    toggleDarkmode: {
      reducer: (state, action) => { state.isLoggedIn = !state.isLoggedIn }
    }
  }
});

export const store = configureStore({
  reducer: {
    darkmode: darkmodeSlice.reducer,
    login: loginSlice.reducer
  }
});
