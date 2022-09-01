import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const applicationSlice = createSlice({
    name: "application",
    initialState: {
        hasRequiredApplicationData: false,
    },
    reducers: {
        setHasRequiredApplicationData(state, action) {
            state.hasRequiredApplicationData = action.payload;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.application,
            };
        },
    },
});

export const { setHasRequiredApplicationData } = applicationSlice.actions;

export const selectHasRequiredApplicationData = (state: AppState) =>
    state.application.hasRequiredApplicationData;

export default applicationSlice.reducer;
