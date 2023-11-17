import { configureStore } from "@reduxjs/toolkit";
import postReducer from './Slices/postSlice'
import likedPostReducer from  './Slices/likedPostSlice'
import savedPostReducer from "./Slices/savedPostSlice";
import authSliceReducer from "./Slices/authSlice";

const store = configureStore({
    reducer:{
        posts:postReducer,
        likedPost:likedPostReducer,
        savedPost:savedPostReducer,
        auth:authSliceReducer,
    }
})

export default store;