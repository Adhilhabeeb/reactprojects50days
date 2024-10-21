

import{createSlice} from "@reduxjs/toolkit"

import React from 'react'
let initialStates={

    name:"adhil",email:"adhilhabeeb@gmail.com"
}
 export let userslice =createSlice({
    name:"user",initialState:initialStates,reducers:{
        update:(state,action)=>{
            state.name=action.payload.name
            state.email=action.payload.email
        }
    }
})

export const {update}=userslice.actions
export default userslice.reducer