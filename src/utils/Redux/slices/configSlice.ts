import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isUserLoggedIn: false,
    userEmail: '',
};

export const configSlice = createSlice({
    name: 'configSlice',
    initialState,
    reducers: {
        setIsUserLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isUserLoggedIn = action.payload;
        },
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.userEmail = action.payload;
        },
    },
});

export const { setIsUserLoggedIn,setUserEmail } = configSlice.actions;

export default configSlice.reducer;
