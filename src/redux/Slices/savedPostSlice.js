import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:JSON.parse(localStorage.getItem("saved-posts")) || [],
}

const savedPostSlice = createSlice({
    name:"savedPost",
    initialState,
    reducers:{
        toggleSave(state,action){
            const isSaved = state.posts.find(q => q.id === action.payload.id);
            if(isSaved){
                state.posts = state.posts.filter(q => q.id !== action.payload.id);
            }
            else{
                state.posts.push(action.payload);
            }
            localStorage.setItem("saved-posts",JSON.stringify(state.posts))
        }
    }
})

export default savedPostSlice.reducer;
export const {toggleSave} = savedPostSlice.actions