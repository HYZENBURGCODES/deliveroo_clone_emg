import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slices/configSlice";

const store = configureStore({
    reducer: {
        configReducer: configReducer,
    }
});

export default store;
