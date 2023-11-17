import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    token: localStorage.getItem("token"),
};




const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem("token", state.token);
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
        setUserInfo: (state, action) => {
            state.user = action.payload;
        },
    },
});


export const { loginUser, logoutUser,setUserInfo } = authSlice.actions;
export default authSlice.reducer;