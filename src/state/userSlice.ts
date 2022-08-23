import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { User } from "../type";
import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface UserState {
  user: User | null;
}

// Initial state
const initialState: UserState = {
  user: null,
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the authentication status
    setUser(state, action) {
      state.user = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.user,
        };
      },
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: AppState) => state.user.user;

export default userSlice.reducer;
