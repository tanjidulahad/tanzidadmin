import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
  loggedIn:false
}

export const userslice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login:(state,action)=>{
            return {...state,loggedIn:true,user:action.payload}
        },
        logout:(state)=>{
            return {...state,loggedIn:false,user:null}
        }
    },
  })

  // Action creators are generated for each case reducer function
export const { login, logout } = userslice.actions

export default userslice.reducer