import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const createAccountState = createSlice({
    name: "createAccount",
    initialState,
    reducers:{
        createAccountOpen: (state)=>{
            state.value = true
        },
        createAccountClose: (state) =>{
            state.value = false
        } 
    }
})

export const {createAccountClose , createAccountOpen } = createAccountState.actions
export default createAccountState.reducer