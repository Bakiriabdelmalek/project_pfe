import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        isAuthorized:false,
        
    },

    reducers:{
        setAuthorized:(state,action)=>{
            state.isAuthorized= action.payload
        }
    }


})

export const {setAuthorized} =  authSlice.actions;

export default authSlice.reducer;