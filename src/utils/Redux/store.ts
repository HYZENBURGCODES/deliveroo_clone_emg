import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slices/configSlice";
import flowStateReducer from "./slices/flowStateSlice";

const store = configureStore({
    reducer: {
        configReducer: configReducer,
        flowStateReducer: flowStateReducer,
    }
});

export default store;
