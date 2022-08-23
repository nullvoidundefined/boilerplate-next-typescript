import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface AuthState {
  sessionToken: string | null;
}

// Initial state
const initialState: AuthState = {
  sessionToken: null,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthSessionToken(state, action) {
      state.sessionToken = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

export const { setAuthSessionToken } = authSlice.actions;

export const selectAuthSessionToken = (state: AppState) => state.auth.sessionToken;

export default authSlice.reducer;
