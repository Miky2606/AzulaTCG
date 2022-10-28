import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    logged: boolean
}

const initialState: AuthState = {
    logged: false
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logged: (state: AuthState) => {
            state.logged = true
        },
        logout: (state: AuthState) => {
            state.logged = false
        }
    }

})

export const { logged, logout } = auth.actions;


export default auth.reducer