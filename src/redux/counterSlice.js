import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    /* actions */
    reducers:{
        increment: (state) =>{
            state.value+=1
        },
        decrement: (state) =>{
            state.value-=1
        },
        reset: (state) =>{
            state.value=0
        },
        changeRange: (state,action)=>{
            state.value += action.payload
        }
    }
}

)
/* action are needed to components */
export const {increment, decrement, reset,changeRange} = counterSlice.actions
/* reducer are needed to store to update the state */
export default counterSlice.reducer