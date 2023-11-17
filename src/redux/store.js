import { configureStore } from "@reduxjs/toolkit";
import postReducer from './Slices/postSlice'
import likedPostReducer from  './Slices/likedPostSlice'
import savedPostReducer from "./Slices/savedPostSlice";

const store = configureStore({
    reducer:{
        posts:postReducer,
        likedPost:likedPostReducer,
        savedPost:savedPostReducer
    }
})

export default store;