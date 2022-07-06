import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    name: "",
};

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        submitForm: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
        }
    }
});

export const {submitForm} = registerSlice.actions;
// export const selectForm = (state) => state.register;
export default registerSlice.reducer;