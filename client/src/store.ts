import {configureStore, Store} from "@reduxjs/toolkit";
import sortReducer from "./reducers/sortReducer.ts";

const store = configureStore({
    reducer: {
        sort: sortReducer,
    }
})

export type RootState = ReturnType<Store["getState"]>

export default store;
