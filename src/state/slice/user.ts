import { AppState } from "../store";
import { User } from "../../type";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // This breaks the build. Commenting out for now.
    
    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.user,
    //     };
    //   },
    // },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: AppState) => state.user.user;

export default userSlice.reducer;
