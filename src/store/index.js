import { configureStore, createSlice } from '@reduxjs/toolkit'
const initialState={
    users:[]
}
const AuthInitialState = {
    isLoggedIn: false, 
    loggedInUser : {},
}
const AuthSlice = createSlice({
    name: "Auth",
    initialState: AuthInitialState,
    reducers : {
        loginUser : (state, action) => {
            state.loggedInUser = action.payload.user;
            state.isLoggedIn = true;
        },
        logout : (state) => {
            state.loggedInUser = {};
            state.isLoggedIn = false;
        }

    }
})

const userSlice=createSlice({
    name:"Users",
    initialState:initialState,
    reducers:{
         adduser(state,action){
             state.users=[action.payload]
         },
         addBulkUsers(state,action){
             state.users=action.payload
         },
         loggedInUser(state,action){
             state.users=state.users.filter(user=>{
                 user.username = action.payload
             })
         }
    }
})

export const userActions = userSlice.actions
export const authActions = AuthSlice.actions;
const store=configureStore({
    reducer:{user:userSlice.reducer,Auth: AuthSlice.reducer}
})
export default store;
