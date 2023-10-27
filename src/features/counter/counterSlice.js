import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 1
}

export const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        inc: (state) => { state.count++ },
        dec: (state) => { state.count-- },
        res: (state) => { state.count = 0 }
    }
})

export var { inc, dec, res } = counterSlice.actions;
var counterReducer = counterSlice.reducer;
export default counterReducer;