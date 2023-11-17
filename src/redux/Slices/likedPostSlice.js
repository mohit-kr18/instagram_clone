import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:JSON.parse(localStorage.getItem("liked-posts")) || [],
}

const likedPostSlice = createSlice({
    name:"likedPost",
    initialState,
    reducers:{
        toggleLike(state,action){
            // id is passed as payload
            const isLiked = state.posts.find(id => id === action.payload);
            if(isLiked){
                state.posts = state.posts.filter(id => id !== action.payload);
            }
            else{
                state.posts.push(action.payload);
            }
            localStorage.setItem("liked-posts",JSON.stringify(state.posts))
        }
    }
})

export default likedPostSlice.reducer;
export const {toggleLike} = likedPostSlice.actions