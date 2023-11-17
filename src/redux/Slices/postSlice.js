import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:JSON.parse(localStorage.getItem("posts")) || [],
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        createPost(state,action){
            state.posts.push(action.payload)
            localStorage.setItem("posts",JSON.stringify(state.posts))
        }
    }
})

export default postSlice.reducer;
export const {createPost} = postSlice.actions