import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    selectedCategoryRdx: 0,
};

export const flowStateSlice = createSlice({
    name: 'flowStateSlice',
    initialState,
    reducers: {
        setSelectedCategoryRdx: (state, action: PayloadAction<number>) => {
            state.selectedCategoryRdx = action.payload;
        },
    },
});

export const { setSelectedCategoryRdx } = flowStateSlice.actions;

export default flowStateSlice.reducer;
