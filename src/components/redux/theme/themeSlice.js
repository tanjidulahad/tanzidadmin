import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkModeOn:false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeToggle:(state)=>{
            state.darkModeOn=!state.darkModeOn
        }
    },
  })

  export const { themeToggle } = themeSlice.actions

  export default themeSlice.reducer