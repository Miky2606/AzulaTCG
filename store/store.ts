import { configureStore } from '@reduxjs/toolkit'
import auth from './slice/auth'
import counterReducer from './slice/slice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: auth
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const setAuth = ((state: RootState) => state.auth.logged)
export const setCounter = ((state: RootState) => state.counter.value)