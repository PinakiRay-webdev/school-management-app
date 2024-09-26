import { createSlice } from "@reduxjs/toolkit";
import userInfo from '../../users.json'

const initialState = {
    userData : userInfo
}

export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers:{
        addUser: (state , action)=>{
                state.userData.users.push(action.payload)
        },
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer