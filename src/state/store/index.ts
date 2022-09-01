import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import { applicationSlice } from "../slice/application";
import { userSlice } from "../slice/user";

const makeStore = () =>
    configureStore({
        reducer: {
            [applicationSlice.name]: applicationSlice.reducer,
            [userSlice.name]: userSlice.reducer,
        },
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
