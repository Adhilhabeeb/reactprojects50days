
import{createSlice} from "@reduxjs/toolkit"

import React from 'react'

 export let userslicethe =createSlice({
    name:"theme",initialState:{

        themeclr:"dark"
    },reducers:{
        colorcghange:(state,action)=>{
            console.log(action.payload.THEME,"actionnn")
         state.themeclr=action.payload.THEME
            
        }
    }
})

export const {colorcghange}=userslicethe.actions
export default userslicethe.reducer