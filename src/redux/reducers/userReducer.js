import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState={
    movies:[],
}

const moviesSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
        }
    }
})

export const {addMovies}=moviesSlice.actions;
export default moviesSlice.reducer;