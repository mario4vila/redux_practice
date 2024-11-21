// import { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../feature/counter/counterSlice.js";
import userSlice from "../feature/user/userSlice.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userSlice,
    },
})