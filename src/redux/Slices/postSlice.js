import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:JSON.parse(localStorage.getItem("posts")) || [],
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        createPost(state,action){
            state.posts.unshift(action.payload)
            localStorage.setItem("posts",JSON.stringify(state.posts))
        },
        setPosts(state,action){
            state.posts = action.payload;
            localStorage.setItem("posts",JSON.stringify(state.posts))
        }
    }
})

export default postSlice.reducer;
export const {createPost,setPosts} = postSlice.actions