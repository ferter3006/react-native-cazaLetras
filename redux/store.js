import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    user: UserReducer,
})

export const store = configureStore({ reducer: rootReducer });