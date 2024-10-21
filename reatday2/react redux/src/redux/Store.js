import { configureStore } from "@reduxjs/toolkit";
import  userreducer from "./Userslice"
import themereducer from "./themeslice"

export default  configureStore({
    reducer:{
        user:userreducer,
        theme:themereducer
       
    }
})